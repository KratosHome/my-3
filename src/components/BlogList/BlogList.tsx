"use client"
import React, {useRef} from 'react';
import "./BlogList.scss";
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "@/hooks/useLocale";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const BlogList = ({item}: any) => {
    const {locale} = useLocale()
    const {contextSafe} = useGSAP();
    const containerRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLSpanElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = contextSafe(() => {
        gsap.to(imgRef.current, {scale: 1.05, ease: "power1.inOut"});
    });

    const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(containerRef.current, {
            rotationY: 15 * x,
            rotationX: -15 * y,
            ease: "power2.out",
            duration: 0.6,
            transformPerspective: 800,
            overwrite: 'auto'
        });
    });


    const handleMouseLeave = contextSafe(() => {
        gsap.to(containerRef.current, {
            rotationY: 0,
            rotationX: 0,
            ease: "power2.inOut",
            duration: 0.45,
            overwrite: 'auto'
        });

        gsap.to(imgRef.current, {scale: 1, ease: "power1.inOut"});
    })

    return (
        <Link
            ref={containerRef}
            href={`/${locale}/blog/${item.title}`} className="container-blog-list"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <span ref={titleRef}>{item.title}</span>
                <div className="img-container" ref={imgRef}>
                    <Image src={item.img} alt={item.title} fill={true}/>
                </div>
            </div>
            <div className="user-name__blog-list">{item.userDetails.username}</div>
        </Link>
    );
};

export default BlogList;

"use client"
import React, {useRef} from 'react';
import "./BlogList.scss";
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "@/hooks/useLocale";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import Avatar from "@/components/UI/Avatar/Avatar";
import {formatDate} from "@/utils/formatDate";
import {useGsapPageTransition} from "@/hooks/useGsapPageTransition";

const BlogList = ({item}: any) => {
    const {locale} = useLocale()
    const {contextSafe} = useGSAP();
    const triggerAnimation = useGsapPageTransition();
    const containerRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLSpanElement>(null);
    const subTitleRef = useRef<HTMLSpanElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const userRef = useRef<HTMLDivElement>(null);

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

    const handleMouseEnter = contextSafe(() => {
        gsap.to(titleRef.current, {scale: 1.02, ease: "power1.inOut"});
        gsap.to(subTitleRef.current, {scale: 1.07, ease: "power1.inOut"});
        gsap.to(imgRef.current, {scale: 1.1, ease: "power1.inOut"});
        gsap.to(buttonRef.current, {scale: 1, ease: "power1.inOut"});
        gsap.to(userRef.current, {scale: 1.05, ease: "power1.inOut"});
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(containerRef.current, {
            rotationY: 0,
            rotationX: 0,
            ease: "power2.inOut",
            duration: 0.45,
            overwrite: 'auto'
        });

        gsap.to(titleRef.current, {scale: 1, ease: "power1.inOut"});
        gsap.to(subTitleRef.current, {scale: 1, ease: "power1.inOut"});
        gsap.to(imgRef.current, {scale: 1, ease: "power1.inOut"});
        gsap.to(buttonRef.current, {scale: 1, ease: "power1.inOut"});
        gsap.to(userRef.current, {scale: 1, ease: "power1.inOut"});
    })

    const handleClick = (e: React.MouseEvent, rout: string) => {
        e.preventDefault();
        triggerAnimation(".page-transition", rout);
    };
    return (
        <Link
            ref={containerRef}
            href={`/${locale}/blog/${item.url}`} className="container-blog-list"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(e, `/${locale}/blog/${item.url}`)}
        >
            <div className="create-at__blog-list">
                {formatDate(item.createdAt, false)}
            </div>
            <div className="wrapper__blog-list">
                <span ref={titleRef}>{item.title}</span>
                <span ref={subTitleRef}>
                 {item.subTitle}
                </span>
                <div className="img-container__blog-list" ref={imgRef}>
                    <Image src={item.img} alt={item.title} fill={true}/>
                </div>
                <div className="user__blog-list" ref={userRef}>
                    <Avatar src={item.userDetails.img} alt={item.userDetails.username} size={"small"}/>
                    <div className="user-name__blog-list">
                        {item.userDetails.username}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogList;

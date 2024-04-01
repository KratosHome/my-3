"use client"
import React, {useRef} from 'react';
import "./BlogList.scss";
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "@/hooks/useLocale";
import {useGSAP} from "@gsap/react";

const BlogList = ({item}: any) => {
    const {locale} = useLocale()
    const containerRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLSpanElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

    },{})

    console.log(item)
    return (
        <Link ref={containerRef} href={`/${locale}/blog/${item.title}`} className="container-blog-list">
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

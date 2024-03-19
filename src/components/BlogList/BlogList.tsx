"use client"
import React from 'react';
import "./BlogList.scss";
import Image from 'next/image';
import Link from "next/link";
import {usePathname} from "next/navigation";

const BlogList = ({item}: any) => {

    const pathname = usePathname();
    const lacal = pathname.split('/')[1];
    return (
        <Link href={`/${lacal}/blog/${item.url}`} className="container-blog-list">
            <div className="img-container">
                <Image src={item.img} alt={item.titleEn} fill={true}/>
            </div>
            <h2>{item.titleEn}</h2>
        </Link>
    );
};

export default BlogList;
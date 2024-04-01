"use client"
import React from 'react';
import "./BlogList.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

const BlogList = ({item}: any) => {


    const pathname = usePathname();
    const lacal = pathname.split('/')[1];

    console.log(item)
    return (
        <Link href={`/${lacal}/blog/${item.title}`} className="container-blog-list">
            <div className="img-container">
                <Image src={item.img} alt={item.title} fill={true}/>
            </div>
            {item.title}
        </Link>
    );
};

export default BlogList;

/*
            <div className="img-container">
                <Image src={item.img} alt={item.titleEn} fill={true}/>
            </div>
            <h2>{item.titleEn}</h2>
            <p>data</p>
            <p>Avtor</p>
            <p>read mor </p>111
 */
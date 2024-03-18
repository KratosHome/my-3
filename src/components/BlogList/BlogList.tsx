import React from 'react';
import "./BlogList.scss";
import Image from 'next/image';
import Link from "next/link";

const BlogList = ({item}) => {
    return (
        <Link href={`/${item.url}`} className="container-blog-list">
           <div className="img-container">
               <Image src={item.img} alt={item.titleEn} fill={true}/>
           </div>
            <h2>{item.titleEn}</h2>
        </Link>
    );
};

export default BlogList;
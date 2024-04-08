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
  console.log("item", item)
    return (
<>
</>
    );
};

export default BlogList;

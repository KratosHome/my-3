'use client';
import "./not-found.scss"
import Error from 'next/error';
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import Link from "next/link";

export default function NotFound() {
    return (
        <html lang="en">
        <body className="not-found__container">
        <h1>Such a language does not exist</h1>
        <HoverLink rout="/">
            Go to the main page
        </HoverLink>
        <Error statusCode={404}/>
        </body>
        </html>
    );
}
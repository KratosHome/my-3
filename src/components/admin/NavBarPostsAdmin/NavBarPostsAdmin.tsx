"use client"
import React from 'react';
import "./NavBarPostsAdmin.scss"
import {navBarPostsList} from "@/mokDate/navBarPostsList";
import LinkList from "@/components/admin/LinkList/LinkList";


const NavBarPostsAdmin = () => {

    return (
        <>
            <ul className="nav-bar-post-admin__container">
                {navBarPostsList.map((item: any) => (
                    <LinkList key={item.url} item={item}/>
                ))}
            </ul>
        </>
    );
};

export default NavBarPostsAdmin;
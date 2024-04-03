"use client"
import React from 'react';
import "./NavBarAdmin.scss";
import {adminNavBar} from "@/mokDate/adminNavBar";
import LinkList from "@/components/admin/LinkList/LinkList";


const NavBarAdmin = () => {

    return (
        <div className="nav-bar-admin__container">
            {adminNavBar.map((item: any) => (
                <LinkList key={item.url} item={item}/>
            ))}
        </div>
    );
};

export default NavBarAdmin;
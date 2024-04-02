"use client"
import React from 'react';
import "./NavBarAdmin.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {adminNavBar} from "@/mokDate/adminNavBar";
import Lock from "@/assets/Lock";


const NavBarAdmin = () => {
    const pathName = usePathname();
    const locale = pathName.split('/')[1];
    const {data: session} = useSession<any>();

    const hasAccess = (roles: string[]): boolean => {
        return roles.includes('all') || ((session?.user as any)?.isAdmin && roles.includes('admin'));
    };

    const isActive = (url: string): boolean => {
        return pathName === `/${locale}${url}`;
    };
    return (
        <div className="nav-bar-admin__container">
            {adminNavBar.map((item: any, index: number) => (
                <div key={item.url}>
                    {hasAccess(item.role) ? (
                        <Link href={`/${locale}${item.url}`}
                              className={isActive(item.url) ? 'active-link-nav-admin' : 'item-nav-bar-admin'}>
                            {locale === "en" ? item.nameEn : item.nameUa}
                        </Link>
                    ) : (
                        <div className="item-nav-bar-admin">
                            <Lock/>
                            <span>
                                  {locale === "en" ? item.nameEn : item.nameUa}
                             </span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NavBarAdmin;
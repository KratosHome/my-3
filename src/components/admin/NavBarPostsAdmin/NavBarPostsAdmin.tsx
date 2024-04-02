"use client"
import React from 'react';
import "./NavBarPostsAdmin.scss"
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import Link from "next/link";
import Lock from "@/components/SVG/Lock";
import {navBarPostsList} from "@/mokDate/navBarPostsList";
import {useLocale} from "@/hooks/useLocale";


const NavBarPostsAdmin = () => {
    const pathName = usePathname();
    const {locale} = useLocale();
    const {data: session} = useSession<any>();

    const hasAccess = (roles: string[]): boolean => {
        return roles.includes('all') || ((session?.user as any)?.isAdmin && roles.includes('admin'));
    };

    const isActive = (url: string): boolean => {
        return pathName === `/${locale}${url}`;
    };

    return (
        <div>
            <ul className="nav-bar-post-admin__container">
                {navBarPostsList.map((item: any, index: number) => (
                    <li key={item.url}>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBarPostsAdmin;
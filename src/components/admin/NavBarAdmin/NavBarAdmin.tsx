"use client"
import React from 'react';
import "./NavBarAdmin.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";

const navBar = [
    {
        nameUa: "головна",
        nameEn: "main",
        url: "/admin",
        role: ["all"]
    },
    {
        nameUa: "проект",
        nameEn: "project",
        url: "/admin/project",
        role: ["all"]
    },
    {
        nameUa: "пости",
        nameEn: "posts",
        url: "/admin/my-posts",
        role: ["all"]
    },
    {
        nameUa: "налаштування",
        nameEn: "settings",
        url: "/admin/settings",
        role: ["all"]
    },
    {
        nameUa: "користувачи",
        nameEn: "users",
        url: "/admin/users",
        role: ["admin"]
    },
]

const NavBarAdmin = () => {
    const pathName = usePathname();
    const locale = pathName.split('/')[1];
    const {data: session} = useSession()

    // const session = await auth();
    console.log("session", session?.user?.isAdmin)
    return (
        <div>
            {navBar.map((item, index) =>
                <div key={item.url}>
                    <Link href={`/${locale}${item.url}`}>
                        {item.nameUa}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavBarAdmin;
import {FC} from 'react';
import "./LinkList.scss";
import Link from "next/link";
import Lock from "@/assets/Lock";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";


interface LinkListProps {
    item: any
}

const LinkList: FC<LinkListProps> = ({item}) => {
    const {data: session} = useSession<any>();
    const pathName = usePathname();
    const locale = pathName.split('/')[1];

    const hasAccess = (roles: string[]): boolean => {
        return roles.includes('all') || ((session?.user as any)?.isAdmin && roles.includes('admin'));
    };
    const isActive = (url: string): boolean => {
        return pathName === `/${locale}${url}`;
    };
    return (
        <li className="container__link-list">
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
    );
};

export default LinkList;
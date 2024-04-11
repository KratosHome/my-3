'use client';
import "./not-found.scss"
import {useTranslations} from 'next-intl';
import HoverLink from "@/components/UI/HoverLink/HoverLink";

export default function Error({error, reset}: any) {
    const t = useTranslations('page.not-found');

    return (
        <div className="not-found__container">
            <h1>
                {t('title')}
            </h1>
            <h2>
                {t('description')}
            </h2>
            <HoverLink rout={"/"}>
                {t('link')}
            </HoverLink>
        </div>
    );
}
"use client"
import React, {useEffect, useState} from 'react';
import "./СhangePasswordWrapper.scss"
import {useParams, useRouter} from "next/navigation";
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Loading from "@/components/UI/loaders/Loading/Loading";
import Warning from "@/components/UI/Warning/Warning";
import {useTranslations} from "next-intl";

const СhangePasswordWrapper = ({lang}: any) => {
    const t = useTranslations('page.login');
    const params = useParams()
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [error, serError] = useState<null | string>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsLoading(true);
        const formData = new FormData(e.target);
        const passwordEntry = formData.get('password');
        const repeatPasswordEntry = formData.get('repeatPassword');
        const password = typeof passwordEntry === 'string' ? passwordEntry.toLowerCase() : '';
        const repeatPassword = typeof repeatPasswordEntry === 'string' ? repeatPasswordEntry.toLowerCase() : '';


        fetch('/api/users/new-password', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                token: params.token,
                password: password,
                repeatPassword: repeatPassword
            }),
        })
            .then(async (response) => {
                const data = await response.json();
                if (!response.ok) {
                    serError(data.error);
                    setSubmitSuccess(false);
                } else {
                    setSubmitSuccess(true);
                }
            })
            .catch((error) => {
                console.log("error", error);
                setSubmitSuccess(false);
                //  serError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }

    useEffect(() => {
        if (submitSuccess) {
            const timer = setTimeout(() => {
                router.push(`/${lang}/login`);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [submitSuccess]);

    return (
        <div className="change-password_container">
            {loading && <Loading/>}
            {submitSuccess && <Warning color={"ok"}>{t('passwordChanged')}</Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <h1>{t('forgotPassword')}</h1>
            <form onSubmit={handleSubmit}>
                <MyInput type={"password"} placeholder={t('password')} name={"password"}/>
                <MyInput type={"password"} placeholder={t('repeatPassword')} name={"repeatPassword"}/>
                <Button disabled={isSubmitting}>{t('submit')}</Button>
            </form>
        </div>
    );
};

export default СhangePasswordWrapper;
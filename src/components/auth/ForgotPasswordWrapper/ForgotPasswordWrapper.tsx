"use client"
import React from 'react';
import "./ForgotPasswordWrapper.scss";
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Warning from "@/components/UI/Warning/Warning";
import Loading from "@/components/UI/loaders/Loading/Loading";
import {useFetchData} from "@/hooks/useFetchData";
import {useTranslations} from 'next-intl';

const ForgotPasswordWrapper = () => {
    const t = useTranslations('page.login');
    const {data, error, isLoading, fetchData} = useFetchData<{ error?: string }>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const emailEntry = formData.get('email');
        const email = typeof emailEntry === 'string' ? emailEntry.toLowerCase() : '';

        fetchData('/api/users/password-reset', {email});
    }

    return (
        <div className="forget-password__container">
            {isLoading && <Loading/>}
            {data && <Warning color={"ok"}>{t('checkEmail')}</Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div>
                <h1>{t('forgotPassword')}</h1>
                <form className="login-form__container" onSubmit={handleSubmit}>
                    <MyInput type={"text"} placeholder={t('email')} name={"email"}/>
                    <Button disabled={isLoading || data?.success}>{t('submit')}</Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordWrapper;
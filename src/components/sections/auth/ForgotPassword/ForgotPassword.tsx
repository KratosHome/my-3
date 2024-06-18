"use client"
import React from 'react';
import st from "./forgotPassword.module.scss";
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Warning from "@/components/UI/Warning/Warning";
import Loading from "@/components/UI/loaders/Loading/Loading";
import {useFetchData} from "@/hooks/useFetchData";
import {useTranslations} from 'next-intl';
import {SubmitHandler, useForm} from "react-hook-form";

interface ForgotPasswordValues {
    email: string;
}

const ForgotPassword = () => {
    const t = useTranslations('page.login');
    const {register, handleSubmit, formState: {errors}} = useForm<ForgotPasswordValues>();

    const {data, error, isLoading, fetchData} = useFetchData<{ error?: string }>();

    const onSubmit: SubmitHandler<ForgotPasswordValues> = (data) => {
        fetchData('/api/users/password-reset', data);
    }

    return (
        <div className={st.container}>
            {isLoading && <Loading/>}
            {data && <Warning color={"ok"}>{t('checkEmail')}</Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div>
                <h1>{t('forgotPassword')}</h1>
                <form className="login-form__container" onSubmit={handleSubmit(onSubmit)}>
                    <MyInput
                        type={"text"}
                        placeholder={t('email')}
                        name={"email"}
                        register={{
                            ...register('email', {
                                required: `${t('This field is required')}`,
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: `${t('This is not an email')}`
                                }
                            })
                        }}
                        error={errors.email?.message}
                    />
                    <Button disabled={isLoading || data?.success}>{t('submit')}</Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
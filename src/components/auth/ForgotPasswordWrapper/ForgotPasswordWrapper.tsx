"use client"
import React, {useState} from 'react';
import "./ForgotPasswordWrapper.scss";
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Warning from "@/components/UI/Warning/Warning";
import Loading from "@/components/UI/Loading/Loading";
import {useFetchData} from "@/hooks/useFetchData";

const ForgotPasswordWrapper = ({dict}: any) => {
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
            {data && <Warning color={"ok"}> {dict.warnings.checkEmail} </Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div>
                <h1>{dict.page.login.forgotPassword}</h1>
                <form className="login-form__container" onSubmit={handleSubmit}>
                    <MyInput type={"text"} placeholder={dict.page.login.email} name={"email"}/>
                    <Button disabled={isLoading || data?.success}>{dict.page.login.submit}</Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordWrapper;
"use client"
import React, {useState} from 'react';
import "./ForgotPasswordWrapper.scss";
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Warning from "@/components/UI/Warning/Warning";
import Loading from "@/components/UI/Loading/Loading";

const ForgotPasswordWrapper = ({dict}: any) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [error, serError] = useState<null | string>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsLoading(true);
        const formData = new FormData(e.target);
        const emailEntry = formData.get('email');
        const email = typeof emailEntry === 'string' ? emailEntry.toLowerCase() : '';

        fetch('/api/users/password-reset', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({email: email}),
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
                //    serError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }

    return (
        <div className="forget-password__container">
            {loading && <Loading/>}
            {submitSuccess && <Warning color={"ok"}> {dict.warnings.checkEmail} </Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div>
                <h1>{dict.page.login.forgotPassword}</h1>
                <form className="login-form__container" onSubmit={handleSubmit}>
                    <MyInput type={"text"} placeholder={dict.page.login.email} name={"email"}/>
                    <Button disabled={isSubmitting}>{dict.page.login.submit}</Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordWrapper;
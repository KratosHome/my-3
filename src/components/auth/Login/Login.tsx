"use client"
import st from "./login.module.scss"
import React, {useState} from 'react';
import GitHubButton from "@/components/UI/GitHubButton/GitHubButton";
import OrLine from "@/components/UI/OrLine/OrLine";
import MyInput from "@/components/UI/MyInput/MyInput";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import Button from "@/components/UI/Button/Button";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginAction} from "@/server/auth/login.server";
import Loading from "@/components/UI/loaders/Loading/Loading";
import Warning from "@/components/UI/Warning/Warning";
import {useRouter} from "next/navigation";

interface LoginFormValues {
    email: string;
    password: string;
}

const Login = () => {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations('page.login');
    const {register, handleSubmit, formState: {errors}, watch} = useForm<LoginFormValues>();

    const [errorAction, setErrorAction] = useState<boolean | undefined>(false);
    const [loading, setLoading] = useState<boolean | undefined>(false);
    const [success, setSuccess] = useState<boolean | undefined>(false);

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        setLoading(true)
        const result = await loginAction(data);
        setLoading(false)
        setErrorAction(result?.error)
        setSuccess(result?.success)

        if (result?.success) {
            router.refresh();
        }
    };

    return (
        <>
            {loading && <Loading/>}
            {success && <Warning color={"ok"}>{t('success')}</Warning>}
            {errorAction && <Warning color={"error"}>{t('No such user exists')}</Warning>}
            <div className={st.container}>
                <div>
                    <h1>{t('h1')}</h1>
                    <GitHubButton/>
                    <OrLine>{t('or')}</OrLine>
                    <form className={st.login_form} onSubmit={handleSubmit(onSubmit)}>
                        <div>
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
                            <MyInput
                                type={"password"}
                                placeholder={t('password')}
                                name={"password"}
                                register={{
                                    ...register('password', {
                                        required: `${t('This field is required')}`,
                                        minLength: {
                                            value: 4,
                                            message: `${t('Minimum number of characters')} 4`,
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: `${t('Maximum number of characters')} 50`,
                                        }
                                    })
                                }}
                                error={errors.password?.message}
                            />
                        </div>
                        <div className={st.btn_login}>
                            <HoverLink rout={`/${locale}/forgot-password`}>{t('forgotYour')}</HoverLink>
                            <Button>{t('login')}</Button>
                        </div>
                    </form>
                    <div className={st.sing_up}>
                        <span>{t('isYourNew')} </span>
                        <HoverLink rout={`/${locale}/sign-up`}>{t('signUp')} </HoverLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
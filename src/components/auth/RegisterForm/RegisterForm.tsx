"use client"
import st from "./registerForm.module.scss"
import  {useState} from 'react';
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Warning from "@/components/UI/Warning/Warning";
import {useTranslations} from "next-intl";
import {SubmitHandler, useForm} from "react-hook-form";
import Loading from "@/components/UI/loaders/Loading/Loading";

interface registerFormValues {
    username: string
    email: string;
    password: string;
    passwordRepeat: string
}

const RegisterForm = () => {
    const t = useTranslations('page.login');
    const {register, handleSubmit, formState: {errors}, watch} = useForm<registerFormValues>();
    const password = watch("password");
    const passwordRepeat = watch("passwordRepeat");

    const [errorAction, setErrorAction] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | undefined>(false);

    const onSubmit: SubmitHandler<registerFormValues> = async (data) => {
        setLoading(true)
        if (password !== passwordRepeat) {
            setErrorAction(t('Passwords do not match'));
            setLoading(false)
            return;
        }

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (!res.ok) {
            setErrorAction(result.error || 'An error occurred.');
            setLoading(false)
            return;
        }

        setErrorAction(null);
        setLoading(false)
    };

    return (
        <>
            {loading && <Loading/>}
            {errorAction && <Warning color={"error"}>{errorAction}</Warning>}
            <div className={st.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <MyInput
                        type={"text"}
                        placeholder={t('username')}
                        name={"username"}
                        register={{
                            ...register('username', {
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
                        error={errors.username?.message}
                    />
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
                    <MyInput
                        type={"password"}
                        placeholder={t('repeatPassword')}
                        name={"passwordRepeat"}
                        register={{
                            ...register('passwordRepeat', {
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
                        error={errors.passwordRepeat?.message}
                    />
                    <Button>{t('submit')}</Button>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;
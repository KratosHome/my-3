import {auth} from "@/lib/users/auth";
import {Metadata} from "next";
import {createUsers, login} from "@/lib/users/userController";
import "./LoginPage.scss"
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import React from "react";
import {getDictionary} from "@/services/dictionary";
import {redirect} from "next/navigation";
import GitHubButton from "@/components/UI/GitHubButton/GitHubButton";
import OrLine from "@/components/UI/OrLine/OrLine";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default async function LoginPage({params: {lang}}: any) {
    const dict = await getDictionary(lang)
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${lang}/profile`);
    }
    return (
        <AnimatedPage>
            <div className="login-page__container">
                <div>
                    <h1>{dict.page.login.h1}</h1>
                    <GitHubButton/>
                    <OrLine>{dict.page.login.or}</OrLine>
                    <form className="login-form__container" action={login}>
                        <div>
                            <MyInput type={"text"} placeholder={dict.page.login.email} name={"email"}/>
                            <MyInput type={"password"} placeholder={dict.page.login.password} name={"password"}/>
                        </div>
                        <div className="btn-login__action">
                            <HoverLink rout={`/${lang}/forgot-password`}>{dict.page.login.forgotYour}</HoverLink>
                            <Button>{dict.page.login.login}</Button>
                        </div>
                    </form>
                    <div className="login-sing-up__actions">
                        <span>{dict.page.login.isYourNew} </span>
                        <HoverLink rout={`/${lang}/sign-up`}>{dict.page.login.signUp}</HoverLink>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}

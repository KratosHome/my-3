import {auth, signIn} from "@/lib/users/auth";
import {Metadata} from "next";
import {createUsers, login} from "@/lib/users/userController";
import "./LoginPage.scss"
import MyInput from "@/components/UI/MyInput/MyInput";
import GitHub from "@/components/SVG/GitHub";
import Button from "@/components/UI/Button/Button";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import React from "react";

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default async function LoginPage() {
    const session = await auth();

    const handleLogin = async () => {
        "use server"
        await signIn("github");
    }


    console.log("session", session)
    if (session?.user) {
        await createUsers(session)
    }
    return (
        <div className="login-page__container">
            <div>
                <h1>Log in to your account</h1>

                <form className="login-gitHub__button" action={handleLogin}>
                    <Button><GitHub/>GitHub</Button>
                </form>
                <div className="container-or"><span>or</span></div>
                <form className="login-form__container" action={login}>
                    <div>
                        <MyInput type={"text"} placeholder={"email"} name={"email"}/>
                        <MyInput type={"password"} placeholder={"password"} name={"password"}/>
                    </div>
                    <div className="btn-login__action">
                        <HoverLink rout={`/`}>Forgot your password?</HoverLink>
                        <Button>login</Button>
                    </div>
                </form>
                <div className="login-sing-up__actions">
                    <span>Is your new </span> <HoverLink rout={`/`}>Sign up</HoverLink>
                </div>
            </div>
        </div>
    );
}

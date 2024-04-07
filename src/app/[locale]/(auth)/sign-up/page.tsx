import {createUsers} from "@/server/users/userController";
import {auth} from "@/server/users/auth";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import React from "react";
import {getDictionary} from "@/utils/dictionary";
import {redirect} from "next/navigation";
import "./SingUp.scss"
import GitHubButton from "@/components/UI/GitHubButton/GitHubButton";
import OrLine from "@/components/UI/OrLine/OrLine";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";

export default async function Page({params: {lang}}: any) {
    const dict = await getDictionary(lang)
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${lang}/profile`);
    }
    return (
        <AnimatedPage>
            <div className="sign-up__container">
                <div>
                    <h1>Sing Up</h1>
                    <GitHubButton/>
                    <OrLine>{dict.page.login.or}</OrLine>
                    <RegisterForm dict={dict}/>
                </div>
            </div>
        </AnimatedPage>
    );
}
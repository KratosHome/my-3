import {getDictionary} from "@/utils/dictionary";
import {auth} from "@/server/users/auth";
import {createUsers} from "@/server/users/userController";
import {redirect} from "next/navigation";
import React from "react";
import ForgotPasswordWrapper from "@/components/auth/ForgotPasswordWrapper/ForgotPasswordWrapper";
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
            <ForgotPasswordWrapper dict={dict}/>
        </AnimatedPage>
    );
}
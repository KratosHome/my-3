import {auth} from "@/server/users/auth";
import {createUsers} from "@/server/users/userController";
import {redirect} from "next/navigation";
import React from "react";
import ForgotPasswordWrapper from "@/components/auth/ForgotPasswordWrapper/ForgotPasswordWrapper";
import AnimatedPage from "@/components/animation/AnimatedPage/AnimatedPage";

export default async function Page({params: {locale}}: any) {
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${locale}/profile`);
    }
    return (
        <AnimatedPage>
            <ForgotPasswordWrapper/>
        </AnimatedPage>
    );
}
import {auth} from "@/server/users/auth";
import {createUsers} from "@/server/users/userController";
import {redirect} from "next/navigation";
import React from "react";
import AnimatedPage from "@/components/animation/AnimatedPage/AnimatedPage";
import ChangePassword from "@/components/auth/ChangePassword/ChangePassword";

export default async function Page({params: {locale}}: any) {
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${locale}/profile`);
    }
    return (
        <AnimatedPage>
            <ChangePassword/>
        </AnimatedPage>
    );
}
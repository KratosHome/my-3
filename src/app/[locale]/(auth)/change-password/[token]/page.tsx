import {auth} from "@/server/users/auth";
import {createUsers} from "@/server/users/userController";
import {redirect} from "next/navigation";
import React from "react";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";
import СhangePasswordWrapper from "@/components/auth/СhangePasswordWrapper/СhangePasswordWrapper";

export default async function Page({params: {lang}}: any) {
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${lang}/profile`);
    }
    return (
        <AnimatedPage>
            <СhangePasswordWrapper lang={lang} dict={{}}/>
        </AnimatedPage>
    );
}
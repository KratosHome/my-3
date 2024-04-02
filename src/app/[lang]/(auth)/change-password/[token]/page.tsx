import {getDictionary} from "@/services/dictionary";
import {auth} from "@/lib/users/auth";
import {createUsers} from "@/lib/users/userController";
import {redirect} from "next/navigation";
import React from "react";
import СhangePasswordWrapper from "@/components/auth/СhangePasswordWrapper/СhangePasswordWrapper";

export default async function Page({params: {lang}}: any) {
    const dict = await getDictionary(lang)
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${lang}/profile`);
    }
    return (
        <>
            <СhangePasswordWrapper lang={lang} dict={dict}/>
        </>
    );
}
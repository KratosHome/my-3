import {auth} from "@/server/auth/auth";
import {Metadata} from "next";
import {createUsers} from "@/server/users/userController";
import {redirect} from "next/navigation";
import AnimatedPage from "@/components/animation/AnimatedPage/AnimatedPage";
import Login from "@/components/auth/Login/Login";

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default async function LoginPage({params: {locale}}: paramsTypes) {
    const session = await auth();

    if (session?.user) {
        await createUsers(session)
        redirect(`/${locale}/profile`);
    }
    return (
        <AnimatedPage>
            <Login/>
        </AnimatedPage>
    );
}

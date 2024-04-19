import {createUsers} from "@/server/users/userController";
import {auth} from "@/server/users/auth";
import RegisterForm from "@/components/auth/RegisterForm/RegisterForm";
import {redirect} from "next/navigation";
import st from "./singUp.module.scss"
import GitHubButton from "@/components/UI/GitHubButton/GitHubButton";
import OrLine from "@/components/UI/OrLine/OrLine";
import AnimatedPage from "@/components/animation/AnimatedPage/AnimatedPage";
import {getTranslations} from "next-intl/server";

export default async function Page({params: {locale}}: any) {
    const session = await auth();
    const t = await getTranslations('page.login');

    if (session?.user) {
        await createUsers(session)
        redirect(`/${locale}/profile`);
    }
    return (
        <AnimatedPage>
            <div className={st.container}>
                <div>
                    <h1>{t('sing up')}</h1>
                    <GitHubButton/>
                    <OrLine>{t('or')}</OrLine>
                    <RegisterForm/>
                </div>
            </div>
        </AnimatedPage>
    );
}
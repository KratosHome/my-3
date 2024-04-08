import {auth} from "@/server/users/auth";
import {Metadata} from "next";
import {createUsers, login} from "@/server/users/userController";
import "./LoginPage.scss"
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import {redirect} from "next/navigation";
import GitHubButton from "@/components/UI/GitHubButton/GitHubButton";
import OrLine from "@/components/UI/OrLine/OrLine";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";
import {getTranslations} from "next-intl/server";

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default async function LoginPage({params: {locale}}: any) {
    const session = await auth();
    const t = await getTranslations('page.login');


    if (session?.user) {
        await createUsers(session)
        redirect(`/${locale}/profile`);
    }
    return (
        <AnimatedPage>
            <div className="login-page__container">
                <div>
                    <h1>{t('h1')}</h1>
                    <GitHubButton/>
                    <OrLine>{t('or')}</OrLine>
                    <form className="login-form__container" action={login}>
                        <div>
                            <MyInput type={"text"} placeholder={t('email')} name={"email"}/>
                            <MyInput type={"password"} placeholder={t('password')} name={"password"}/>
                        </div>
                        <div className="btn-login__action">
                            <HoverLink rout={`/${locale}/forgot-password`}>{t('forgotYour')}</HoverLink>
                            <Button>{t('login')}</Button>
                        </div>
                    </form>
                    <div className="login-sing-up__actions">
                        <span>{t('isYourNew')}</span>
                        <HoverLink rout={`/${locale}/sign-up`}>{t('signUp')}</HoverLink>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}

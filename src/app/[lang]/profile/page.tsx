import {redirect} from "next/navigation";
import {getDictionary} from "@/services/dictionary";
import {auth} from "@/lib/users/auth";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";

export default async function Page({params: {lang}}: any) {
    const dict = await getDictionary(lang)
    const session = await auth();

    if (session === null) {
        redirect(`/${lang}`);
    }
    return (
        <AnimatedPage>
            admin
        </AnimatedPage>
    );
}
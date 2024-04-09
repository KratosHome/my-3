import {redirect} from "next/navigation";
import {auth} from "@/server/users/auth";
import AnimatedPage from "@/components/animation/AnimatedPage/AnimatedPage";
import InProgress from "@/components/UI/InProgress/InProgress";

export default async function Page({params: {locale}}: any) {
    const session = await auth();

    if (session === null) {
        redirect(`/${locale}`);
    }
    return (
        <AnimatedPage>
            <InProgress/>
        </AnimatedPage>
    );
}
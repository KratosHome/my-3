import {auth, signIn, signOut} from "@/lib/users/auth";
import {Metadata} from "next";
import {createUsers, login, register} from "@/lib/users/userController";

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default async function LoginPage() {


    const handleLogin = async () => {
        "use server"
        await signIn("github");
    }
    const session = await auth();
    if (session?.user) {
        await createUsers(session)
    }

    const handleLogout = async () => {
        "use server"
        await signOut();

    }

    return (
        <>
            <div>
                <form action={handleLogin}>
                    <button>login gihub</button>
                </form>
                <form action={handleLogout}>
                    <button>log out</button>
                </form>

                <form action={register}>
                    <input type="text" placeholder="username" name="username"/>
                    <input type="text" placeholder="email" name="email"/>
                    <input type="text" placeholder="password" name="password"/>
                    <input type="text" placeholder="repeat password" name="passwordRepeat"/>
                    <input type="text" placeholder="img" name="img"/>
                    <button type={"submit"}>register</button>
                </form>

                <form action={login}>
                    <input type="text" placeholder="email" name="email"/>
                    <input type="text" placeholder="password" name="password"/>
                    <button type={"submit"}>login</button>
                </form>

            </div>
        </>
    );
}
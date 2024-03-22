import {register} from "@/lib/users/userController";
import {signIn} from "@/lib/users/auth";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default async function Page() {

    const handleLogin = async () => {
        "use server"
        await signIn("github");
    }


    return (
        <>
            <div>
                <form action={handleLogin}>
                    <button>login gihub</button>
                </form>
                <RegisterForm/>
            </div>
        </>
    );
}
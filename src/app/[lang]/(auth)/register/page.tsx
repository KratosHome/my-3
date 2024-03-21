import {register} from "@/lib/users/userController";

export default async function Page() {

    return (
        <>
            <div>
                <form action={register}>
                    <input type="text" placeholder="username" name="username"/>
                    <input type="text" placeholder="email" name="email"/>
                    <input type="text" placeholder="password" name="password"/>
                    <input type="text" placeholder="repeat password" name="passwordRepeat"/>
                    <input type="text" placeholder="img" name="img"/>
                    <button type={"submit"}>register</button>
                </form>
            </div>
        </>
    );
}
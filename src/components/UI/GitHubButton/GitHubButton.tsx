import React from 'react';
import "./GitHubButton.scss"
import Button from "@/components/UI/Button/Button";
import GitHub from "@/assets/GitHub";
import {signIn} from "@/server/users/auth";

const GitHubButton = () => {
    const handleLogin = async () => {
        "use server"
        await signIn("gitHub");
    }

    return (
        <form className="button-gitHub__button" action={handleLogin}>
            <Button><GitHub/>GitHub</Button>
        </form>
    );
};

export default GitHubButton;
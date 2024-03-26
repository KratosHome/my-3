import React from 'react';
import "./GitHubButton.scss"
import Button from "@/components/UI/Button/Button";
import GitHub from "@/components/SVG/GitHub";
import {signIn} from "@/lib/users/auth";

const GitHubButton = () => {
    const handleLogin = async () => {
        "use server"
        await signIn("github");
    }

    return (
        <form className="button-gitHub__button" action={handleLogin}>
            <Button><GitHub/>GitHub</Button>
        </form>
    );
};

export default GitHubButton;
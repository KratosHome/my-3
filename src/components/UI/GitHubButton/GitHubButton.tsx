"use client"
import React from 'react';
import st from "./gitHubButton.module.scss"
import Button from "@/components/UI/Button/Button";
import GitHub from "@/assets/GitHub";
import {loginGitHubAction} from "@/server/auth/loginGitHub.server";

const GitHubButton = () => {
    const handleLogin = async () => {
        await loginGitHubAction()
    }

    return (
        <form className={st.container} onSubmit={handleLogin}>
            <Button><GitHub/>GitHub</Button>
        </form>
    );
};

export default GitHubButton;
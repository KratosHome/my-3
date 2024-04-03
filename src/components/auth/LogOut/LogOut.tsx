import React from 'react';
import "./LogOut.scss";
import {logoutAction} from "@/components/auth/LogOut/logoutAction.server";
import LogOutSvg from "@/assets/LogOutSvg";
import {redirect} from "next/navigation";

export default function LogOut() {
    const handleLogout = async (e: any) => {
        e.preventDefault();
        await logoutAction();
        redirect("/");
    }

    return (
        <form onSubmit={handleLogout} className="log-out__container">
            <button><LogOutSvg/></button>
        </form>
    );
}


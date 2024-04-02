import React from 'react';
import "./LogOut.scss";
import {logoutAction} from "@/components/auth/LogOut/logoutAction.server";
import LogOutSvg from "@/assets/LogOutSvg";

export default function LogOut() {
    const handleLogout = async (e: any) => {
        e.preventDefault();
        await logoutAction();
    }

    return (
        <form onSubmit={handleLogout} className="log-out__container">
            <button><LogOutSvg/></button>
        </form>
    );
}


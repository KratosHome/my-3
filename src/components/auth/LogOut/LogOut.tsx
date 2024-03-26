import React from 'react';
import "./LogOut.scss";
import {logoutAction} from "@/components/auth/LogOut/logoutAction.server";

export default function LogOut() {
    const handleLogout = async (e: any) => {
        e.preventDefault();
        await logoutAction();
    }

    return (
        <form onSubmit={handleLogout}>
            <button>log out</button>
        </form>
    );
}


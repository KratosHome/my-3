"use server";

import {signOut} from "@/server/users/auth";

export async function logoutAction() {
    await signOut();
}

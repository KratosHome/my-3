"use server";

import {signOut} from "@/server/auth/auth";

export async function logoutAction() {
    await signOut();
}

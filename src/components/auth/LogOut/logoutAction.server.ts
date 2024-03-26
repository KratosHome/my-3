"use server";

import {signOut} from "@/lib/users/auth";

export async function logoutAction() {
    await signOut();
}

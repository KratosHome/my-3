import {NextRequest} from "next/server";
import {auth} from "@/lib/users/auth";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const session: any = await auth();
    console.log('path', session);

}
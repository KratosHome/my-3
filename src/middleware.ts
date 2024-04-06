import {NextRequest, NextResponse} from "next/server";
import {auth} from "@/lib/users/auth";

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    const session: any = await auth();
    const isProfileUsers = url.pathname.includes('/profile/users');
    const local =  url.pathname.split('/')[1]


    if (url.pathname.startsWith('/profile') && !session) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (isProfileUsers && session.user.isAdmin !== true) {
        return NextResponse.redirect(new URL(`${local}/profile`, request.url));
    }

    return NextResponse.next();
}


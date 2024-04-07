import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()

}


/*

    const isProfileUsers = url.pathname.includes('/profile/users');
    const local =  url.pathname.split('/')[1]


    if (url.pathname.startsWith('/profile') && !session) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (isProfileUsers && session.user.isAdmin !== true) {
        return NextResponse.redirect(new URL(`${local}/profile`, request.url));
    }

    return NextResponse.next();
 */
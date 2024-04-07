import createMiddleware from "next-intl/middleware";
import {NextRequest} from "next/server";


export default function middleware(request: NextRequest) {
    return createMiddleware({
        locales: ['en', 'ua'],
        localeDetection: true,
        localePrefix: "always",
        defaultLocale: 'en'
    })(request);
}

export const config = {
    matcher: ['/', '/(ua|en)/:path*']
};

/*
    const pathWithoutLocale = request.nextUrl.pathname.replace(/^\/(ua|en|ru)/, '');

    if(protectedRoutes.includes(pathWithoutLocale)) {
        if (role?.value === "") {
            console.log("work")
            const url = new URL("", request.nextUrl.origin);
            return NextResponse.redirect(url);
        }
    }

    console.log("role", role?.value === "user")
    console.log("request.nextUrl.pathname", request.nextUrl.pathname)
 */
import { NextResponse } from 'next/server'
import { getUserSession } from './lib/api/session';


export function proxy(request) {
    const user = getUserSession();
    console.log(user, "user");

    if (!user) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    const { pathname } = request.nextUrl;


    //admin routes 
    if (pathname.startsWith("/dashboard/admin")) {
        if (user.role !== "admin") {
            return NextResponse.redirect(new URL("/unauthorized", request.url));
        }
    }

     //Vendor routes 
    if (pathname.startsWith("/dashboard/vendor")) {
        if (user.role !== "vendor") {
            return NextResponse.redirect(new URL("/unauthorized", request.url));
        }
    }

     //Traveler routes 
    if (pathname.startsWith("/dashboard/traveler")) {
        if (user.role !== "traveler") {
            return NextResponse.redirect(new URL("/unauthorized", request.url));
        }
    }
}


export const config = {
    matcher: [
        "/dashboard/admin/:path*",
        "/dashboard/vendor/:path*",
        "/dashboard/traveler/:path*",
    ],
};
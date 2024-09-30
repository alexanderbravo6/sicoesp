import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server"

export { default, withAuth } from "next-auth/middleware"


// This function can be marked `async` if using `await` inside
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const url = req.nextUrl.clone()
    return NextResponse.next();
}


export const config = {
    matcher: [
        "/expediente/:path*",
        "/postular/:path*",
        "/procesos/:path*",
        "/resolucion/:path*",
        "/seguridad/:path*",
        "/mi-perfil/:path*",
    ]
}

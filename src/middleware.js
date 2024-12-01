// middleware.js
import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === '/index.html') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Rewrite / to serve index.html
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/index.html', req.url));
  }
}

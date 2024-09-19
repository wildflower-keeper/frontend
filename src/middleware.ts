import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    // 쿠키 가져오기
    const isLogin = Boolean(req.cookies.get('authToken'));
    const path = req.nextUrl.pathname;


    // 쿠키 값에 따라 리다이렉트 처리
    if (!isLogin && path !== '/auth') {
        return NextResponse.redirect(`${req.nextUrl.origin}/auth`);
    }

    // 기본 경로 유지
    return NextResponse.next();
}

export const config = {
    matcher: [
        // 모든 페이지 경로 (API 및 자산을 제외한 경로만 매칭)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
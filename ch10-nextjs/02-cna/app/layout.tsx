"use client";

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 현재 URL 경로를 추출('/posts', '/user/login')
  const pathname = usePathname();
  // 특정 링크 경로와 정확히 일치하거나 해당 경로의 하위 경로일 때 active 처리
  // pathname과 path가 같거나 pathname이 path로 시작하면 active 클래스 반환
  // Link 컴포넌트에서 넘겨준 path 매개변수를 기준으로만 적용됨
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`) ? "cs-active" : "";

  return (
    <html lang="ko">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-500 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className={`hover:underline ${isActive("/")}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`hover:underline ${isActive("/about")}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className={`hover:underline ${isActive("/posts")}`}
                >
                  게시판
                </Link>
              </li>
              <li>
                <Link
                  href="/user/login"
                  className={`hover:underline ${isActive("/user/login")}`}
                >
                  로그인
                </Link>
              </li>
              <li>
                <Link
                  href="/user/signup"
                  className={`hover:underline ${isActive("/user/signup")}`}
                >
                  회원가입
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

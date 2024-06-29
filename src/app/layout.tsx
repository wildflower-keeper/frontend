import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});
export const metadata: Metadata = {
  title: "들꽃가드닝",
  description: "관리자 페이지",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <div className="flex flex-col min-h-screen h-auto mainBackGround">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

// Compo
import Script from "next/script";
import Providers from "./Provider";
import { GoogleAnalytics } from "./Trackers";
// Utils
import "@/styles/globals.css";
import React from "react";
import localFont from "next/font/local";
// Types
import type { Metadata } from "next";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "들꽃가드닝",
  description: "관리자 페이지",
  icons: "/assets/logos/wildflower_logo.png",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <Script
          strategy="afterInteractive"
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAPS_API_KEY}`}
        />
      </head>
      <body className={pretendard.className}>
        <div className="flex flex-col min-h-screen h-auto mainBackGround">
          <Providers>{children}</Providers>
        </div>
        {process.env.ANALYSIS || process.env.NODE_ENV === "production" ? (
          <GoogleAnalytics />
        ) : null}
      </body>
    </html>
  );
};

export default RootLayout;

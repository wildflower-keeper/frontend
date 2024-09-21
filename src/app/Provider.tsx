"use client";
// Compo

// Utils & Script & Style
import React, { useMemo } from "react";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Types
import type { ReactNode } from "react";

export const ReactCookieProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ReactCookieProvider>
        {/*  */}
        {children}
        {/*  */}
      </ReactCookieProvider>
    </ReactQueryProvider>
  );
};

export default Providers;

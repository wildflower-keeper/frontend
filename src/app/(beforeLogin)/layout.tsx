// Compo
import AuthProvider from "@/components/Layout/AuthProvider";
import Image from "next/image";
// Utils
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NotLoginedLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex-grow flex flex-col gap-12">
      <div>
        <div className="w-40 h-10 m-3">
          <Image
            key={1}
            src="/assets/logos/wildflower_logo_with_name.png"
            width={150}
            height={40}
            alt="로고"
          />
        </div>
      </div>
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>
  );
};

export default NotLoginedLayout;

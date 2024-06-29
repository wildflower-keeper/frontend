import Image from "next/image";
import React, { ReactNode } from "react";

type pageLayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<pageLayoutProps> = ({ children }) => {
  return (
    <div className="flex-grow flex flex-col gap-12">
      <div>
        <div className="w-40 h-10 m-3">
          <Image
            src="/assets/logos/wildflower_logo_with_name.png"
            width={150}
            height={40}
            alt="로고"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;

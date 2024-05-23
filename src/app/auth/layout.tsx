import React, { ReactNode } from "react";

type pageLayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<pageLayoutProps> = ({ children }) => {
  return <div className="flex-grow flex flex-col gap-12">{children}</div>;
};

export default Layout;

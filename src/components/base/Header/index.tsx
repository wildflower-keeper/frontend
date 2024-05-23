import React, { HtmlHTMLAttributes } from "react";

type HeaderProps = HtmlHTMLAttributes<HTMLHeadElement>;

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

export default Header;

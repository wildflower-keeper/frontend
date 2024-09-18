import React, { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLHeadElement> {}

const Header = ({ children, className }: Props) => {
  return <header className={className}>{children}</header>;
};

export default Header;

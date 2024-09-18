"use client";

import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
  className,
  onClick,
  type = "button",
  children,
  ...props
}: Props) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

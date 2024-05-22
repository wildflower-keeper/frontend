"use client";

import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  type = "button",
  children,
  ...props
}) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

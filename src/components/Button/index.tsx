"use client";

import React from "react";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  className,
  onClick,
  type = "button",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

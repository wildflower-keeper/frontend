"use client";

import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  className,
  placeholder,
  onChange,
  type = "text",
  value,
  ...props
}: InputProps) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;

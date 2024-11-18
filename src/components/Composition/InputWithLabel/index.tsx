// Compo

// Utils
import React, { forwardRef } from "react";

//Types

interface Props {
  id: string,
  title: string,
  placeholder?: string,
  type: string,
}

const InputWithLabel = forwardRef<HTMLInputElement, Props>(({ id, title, placeholder, type, ...rest }, ref) => {
  return (
    <div className="flex flex-col justify-end items-start">
            <label htmlFor={id} className="text-center text-base">{title}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="appearance-none text-[#3f3f3f] text-base font-normal w-[360px] outline-none rounded-md border border-solid border-[#19c23d] px-3 py-2"
                ref={ref}
                {...rest}
            />
        </div>
  );
});

export default InputWithLabel;

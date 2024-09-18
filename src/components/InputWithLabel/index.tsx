import React, { HTMLInputTypeAttribute } from "react";
import Input from "../base/Input";

interface Props {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  labelName: string;
}
const InputWithLabel = ({
  id,
  placeholder,
  type,
  value,
  labelName,
  onChange,
  isRequired = false,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`smallFont ${isRequired && "relative"}`}>
        {isRequired && (
          <p className="absolute -top-3 -left-3 text-2xl text-red-400 h-fit">
            •
          </p>
        )}
        <p>{labelName}</p>
      </label>
      <div className="bg-white px-1 rounded-lg shadow-sm shadow-primary/30">
        <Input
          id={id}
          className="py-[6px] px-1 placeholder:text-fontWeak w-full placeholder:text-base"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;

import React, { HTMLInputTypeAttribute } from "react";
import Input from "../base/Input";

type InputWithLabelProps = {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  labelName: string;
};
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  placeholder,
  type,
  value,
  labelName,
  onChange,
  isRequired = false,
}) => {
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
      <div className="bg-white rounded-lg px-1 shadow-sm shadow-primary/30">
        <Input
          id={id}
          className="py-1 px-2 placeholder:text-fontWeak w-full"
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

import { forwardRef } from "react";

interface Props {
    id: string,
    title: string,
    placeholder: string,
    type: string,
    maxLength: number,
    error: boolean,
}

const UserDataInput = forwardRef<HTMLInputElement, Props>(({ id, title, placeholder, maxLength, type, error, ...rest }, ref) => {
    return (
        <div className="flex justify-end items-center gap-5">
            <label htmlFor={id} className={`text-center text-lg font-bold ${error ? 'text-red-500' : null}`}>{title}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                className="appearance-none text-[#3f3f3f] text-base font-normal w-[380px] outline-none rounded-xl border border-solid border-[#e7e7e7] p-3"
                ref={ref}
                {...rest}
            />
        </div>
    );
});

UserDataInput.displayName = 'UserDataInput';

export default UserDataInput;

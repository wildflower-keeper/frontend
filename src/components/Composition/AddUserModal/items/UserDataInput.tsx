interface userDataProps {
    id: string,
    title: string,
    placeholder: string,
}

const UserDataInput = ({ id, title, placeholder }: userDataProps) => {
    return (
        <div className="flex justify-end items-center gap-5">
            <label htmlFor={id} className="text-center text-lg font-bold">{title}</label>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                className="text-[#3f3f3f] text-base font-normal w-[380px] outline-none rounded-xl border border-solid border-[#e7e7e7] p-3"
            />
        </div>
    );
}

export default UserDataInput;
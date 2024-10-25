import { IoCheckmark } from "react-icons/io5";

const SuccessPopup = ({ Message }: { Message: string }) => {
    return (
        <>
            <div className="w-[224px] h-[44px]" />
            <div className="absolute flex gap-2 items-center text-base w-[306px] h-11 px-[18px] py-3 bg-[#353535] rounded-lg text-white">
                <IoCheckmark size={22} />{Message}
            </div>
        </>
    )
};

export default SuccessPopup;
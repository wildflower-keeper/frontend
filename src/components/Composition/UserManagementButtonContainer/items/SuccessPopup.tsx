import userDeleteManagementStore from "@/store/useUserDeleteManagement";
import { useEffect } from "react";
import { IoCheckmark } from "react-icons/io5";

interface SuccessPopupProps {
    Message: string,
    closeMessage: () => void
}

const SuccessPopup = ({ Message, closeMessage }: SuccessPopupProps) => {
    useEffect(() => {
        const timerId = setTimeout(closeMessage, 3000);
        return () => clearTimeout(timerId);
    }, []);
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
"use client"

import { IoCloseOutline } from "react-icons/io5";
import TotalStatus from "./TotalStatus";
import StatusList from "./StatusList";
import { useReceptionStatusContext } from "@/components/Layout/ReceptionStatusProvider";

const ReceptionStatus = () => {
    const receptionStatusContext = useReceptionStatusContext();
    const { isOpenReceptionStatusPopup, setIsOpenReceptionStatusPopup } = receptionStatusContext;
    const onCloseClick = () => {
        setIsOpenReceptionStatusPopup(false);
    }
    return (
        <div>
            {
                isOpenReceptionStatusPopup ?
                    (<div className="absolute flex flex-col gap-4 left-0 top-20 p-5 bg-white min-w-[320px] h-full rounded-2xl shadow-xl">
                        < div className="flex flex-row justify-between" >
                            <h1>수신 현황</h1>
                            <button
                                onClick={onCloseClick}
                                className="flex justify-center items-center w-6 h-6 bg-[#FFF0F0]">
                                <IoCloseOutline size={30} />
                            </button>
                        </div >
                        <TotalStatus />
                        <StatusList />
                    </div >)
                    :
                    null
            }
        </div>

    )
}

export default ReceptionStatus;
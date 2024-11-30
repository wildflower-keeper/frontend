"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface NoticeContextStoreType {
    selectedNotice: number,
    setSelectedNotice: React.Dispatch<React.SetStateAction<number>>,
    isOpenReceptionStatusPopup: boolean,
    setIsOpenReceptionStatusPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

export const noticeContext = createContext<NoticeContextStoreType>({
    selectedNotice: 0,
    setSelectedNotice: () => { },
    isOpenReceptionStatusPopup: false,
    setIsOpenReceptionStatusPopup: () => { }
})

export const useReceptionStatusContext = () => useContext(noticeContext);

function NoticeProvier({ children }: { children: ReactNode }) {
    const [selectedNotice, setSelectedNotice] = useState(0);
    const [isOpenReceptionStatusPopup, setIsOpenReceptionStatusPopup] = useState(false);
    return (
        <noticeContext.Provider
            value={{
                selectedNotice,
                setSelectedNotice,
                isOpenReceptionStatusPopup,
                setIsOpenReceptionStatusPopup
            }}
        >
            {children}
        </noticeContext.Provider>
    )
}

export default NoticeProvier;
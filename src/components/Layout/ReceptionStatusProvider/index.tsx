"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface receptionStatusContextStoreType {
    selectedNotice: number,
    setSelectedNotice: React.Dispatch<React.SetStateAction<number>>,
    isOpenReceptionStatusPopup: boolean,
    setIsOpenReceptionStatusPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

export const receptionStatusContext = createContext<receptionStatusContextStoreType>({
    selectedNotice: 0,
    setSelectedNotice: () => { },
    isOpenReceptionStatusPopup: false,
    setIsOpenReceptionStatusPopup: () => { }
})

export const useReceptionStatusContext = () => useContext(receptionStatusContext);

function ReceptionStatusProvier({ children }: { children: ReactNode }) {
    const [selectedNotice, setSelectedNotice] = useState(0);
    const [isOpenReceptionStatusPopup, setIsOpenReceptionStatusPopup] = useState(false);
    return (
        <receptionStatusContext.Provider
            value={{
                selectedNotice,
                setSelectedNotice,
                isOpenReceptionStatusPopup,
                setIsOpenReceptionStatusPopup
            }}
        >
            {children}
        </receptionStatusContext.Provider>
    )
}

export default ReceptionStatusProvier;
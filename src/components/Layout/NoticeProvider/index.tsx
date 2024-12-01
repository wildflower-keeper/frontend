"use client"

import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface UserData {
    [key: number]: string
}

interface NoticeContextStoreType {
    isEntirety: boolean,
    setIsEntirety: React.Dispatch<React.SetStateAction<boolean>>
    noticeTarget: UserData[]
    setNoticeTarget: (id: number, name: string) => void
    isOpenUserSelectModal: boolean
    setIsOpenUserSelectModal: React.Dispatch<React.SetStateAction<boolean>>
    targetInit: () => void,
    isOpenSuccessPopup: boolean,
    setIsOpenSuccessPopup: React.Dispatch<React.SetStateAction<boolean>>
    totalUserNumber: number
    setTotalUserNumber: React.Dispatch<React.SetStateAction<number>>
}

export const noticeContext = createContext<NoticeContextStoreType>({
    isEntirety: true,
    setIsEntirety: () => {},
    noticeTarget: [],
    setNoticeTarget: () => {},
    isOpenUserSelectModal: false,
    setIsOpenUserSelectModal: () => {},
    targetInit: () => {},
    isOpenSuccessPopup: false,
    setIsOpenSuccessPopup: () => {},
    totalUserNumber: 0,
    setTotalUserNumber: () => {}
})

export const useNoticeContext = () => useContext(noticeContext);

function NoticeProvier({ children }: { children: ReactNode }) {
    const [isEntirety, setIsEntirety] = useState(true);
    const [noticeTarget, setNoticeTarget] = useState<UserData[]>([]);
    const [isOpenUserSelectModal, setIsOpenUserSelectModal] = useState(false);
    const [isOpenSuccessPopup, setIsOpenSuccessPopup] = useState(false);
    const [totalUserNumber, setTotalUserNumber] = useState(0);

    const checkUser = useCallback((id: number, name: string) => {
        setNoticeTarget((prev) => {
            const newArray = [...prev];
            const index = newArray.findIndex((item) => {
                const userId = +Object.keys(item)[0];
                return userId === id;
            });
            if (index != -1) {
                newArray.splice(index, 1);
                return newArray;
            }
            newArray.push({ [id]: name });
            return newArray;
        })
    }, [noticeTarget]);

    const targetInit = useCallback(() => {
        setNoticeTarget([]);
    }, [])
    
    return (
        <noticeContext.Provider
            value={{
                isEntirety,
                setIsEntirety,
                noticeTarget,
                setNoticeTarget: checkUser,
                isOpenUserSelectModal,
                setIsOpenUserSelectModal,
                targetInit,
                isOpenSuccessPopup,
                setIsOpenSuccessPopup,
                totalUserNumber,
                setTotalUserNumber
            }}
        >
            {children}
        </noticeContext.Provider>
    )
}

export default NoticeProvier;
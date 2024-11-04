"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface authManagementType {
    isSuccessFirstAuth: boolean,
    setIsSuccessFirstAuth: React.Dispatch<React.SetStateAction<boolean>>;
    curAdminId: number
    setCurAdminId: React.Dispatch<React.SetStateAction<number>>;
};

    const authContext = createContext<authManagementType>({
        isSuccessFirstAuth: false,
        setIsSuccessFirstAuth: () => {},
        curAdminId: 0,
        setCurAdminId: () => {}
    });

export const useAuthContext = () => useContext(authContext);

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isSuccessFirstAuth, setIsSuccessFirstAuth]= useState(false);
    const [curAdminId, setCurAdminId] = useState(0);
    return (
        <authContext.Provider
            value={{
                isSuccessFirstAuth,
                setIsSuccessFirstAuth,
                curAdminId,
                setCurAdminId
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
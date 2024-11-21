"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface AuthManagementType {
    isSuccessFirstAuth: boolean,
    setIsSuccessFirstAuth: React.Dispatch<React.SetStateAction<boolean>>;
    curAdminEmail: string
    setCurAdminEmail: React.Dispatch<React.SetStateAction<string>>;
};

    const authContext = createContext<AuthManagementType>({
        isSuccessFirstAuth: false,
        setIsSuccessFirstAuth: () => {},
        curAdminEmail: "",
        setCurAdminEmail: () => {}
    });

export const useAuthContext = () => useContext(authContext);

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isSuccessFirstAuth, setIsSuccessFirstAuth]= useState(false);
    const [curAdminEmail, setCurAdminEmail] = useState("");
    return (
        <authContext.Provider
            value={{
                isSuccessFirstAuth,
                setIsSuccessFirstAuth,
                curAdminEmail,
                setCurAdminEmail
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
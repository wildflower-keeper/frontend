// Utils
import React, { ReactNode } from "react";
import NoticeProvider from "@/components/Layout/NoticeProvider"

interface Props {
    children: ReactNode;
}

const NoticeLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <NoticeProvider>
        { children }
        </NoticeProvider>
    );
};

export default NoticeLayout;

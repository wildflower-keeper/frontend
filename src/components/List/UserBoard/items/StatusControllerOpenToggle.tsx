import { ReactNode, useState } from "react";
import StatusToggleList from "./StatusToggleList";

const StatusControllerOpenToggle = ({ children, id }: { children: ReactNode, id: number }) => {
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    const onStatusClick = () => {
        setIsOpenStatus((prev) => !prev);
    }

    return (
        <div className="relative">
            <button onClick={onStatusClick}>
                {children}
            </button>
            {
                isOpenStatus && <StatusToggleList id={id} closeList={onStatusClick} />
            }
        </div>
    )
};

export default StatusControllerOpenToggle;
import { ReactNode, useState } from "react";
import StatusToggleList from "./StatusToggleList";
import { LocationStatusType } from "@/api/v1/shelter-admin/type";

interface StatusControllerOpenToggleProps { 
    children: ReactNode,
    onStatusClick: () => void,
    lastLocationStatus: LocationStatusType
}

const StatusControllerOpenToggle = ({ children, onStatusClick, lastLocationStatus }: StatusControllerOpenToggleProps) => {
    const isOutOrInShelter = lastLocationStatus === "IN_SHELTER" || lastLocationStatus === "OUT_SHELTER";
    return (
            <button onClick={onStatusClick} disabled={!isOutOrInShelter}>
                {children}
            </button>
    )
};

export default StatusControllerOpenToggle;
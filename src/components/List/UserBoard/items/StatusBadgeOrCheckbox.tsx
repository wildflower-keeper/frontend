import { userManagementContext } from "@/components/Layout/UserManagementProvider";
import { Checkbox } from "@mui/material";
import { useContext } from "react";
import StatusControllerOpenToggle from "./StatusControllerOpenToggle";
import StatusBadge from "./StatusBadge";
import { LocationStatusType, SleepoverSituation } from "@/api/v1/shelter-admin/type";

const checkBoxStyle = {
    color: '#34c01f', // 기본 색상 (연두색)
    '&.Mui-checked': {
        color: '#34c01f', // 체크된 색상 (연두색)
    },
    margin: 0, // 마진을 0으로 설정
    padding: 0, // 패딩을 0으로 설정
}

interface StatusBadgeOrCheckboxProps {
    id: number,
    lastLocationStatus?: LocationStatusType,
    sleepoverSituation?: SleepoverSituation,
}

const StatusBadgeOrCheckbox = ({ id, lastLocationStatus, sleepoverSituation }: StatusBadgeOrCheckboxProps) => {
    const userContext = useContext(userManagementContext);
    const {
        isOpenDeleteUser,
        checkedUserList,
        setCheckedUser
    } = userContext;

    const checkUser = (id: number) => {
        setCheckedUser(prev => {
            const newUserList = [...prev];
            if (newUserList.includes(id)) {
                const index = newUserList.indexOf(id);
                newUserList.splice(index, 1);
                return newUserList;
            }
            else return [...newUserList, id];
        });
    }

    if (isOpenDeleteUser) return (
        <Checkbox
            checked={checkedUserList.includes(id)}
            onChange={() => checkUser(id)}
            sx={checkBoxStyle}
        />
    )
    return (
        <StatusControllerOpenToggle id={id}>
            <StatusBadge
                lastLocationStatus={lastLocationStatus}
                sleepoverSituation={sleepoverSituation}
            />
        </StatusControllerOpenToggle>
    )
}

export default StatusBadgeOrCheckbox;
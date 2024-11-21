import { userManagementContext } from "@/components/Layout/UserManagementProvider";
import { Checkbox } from "@mui/material";
import { useContext } from "react";

const checkBoxStyle = {
    color: '#c8ccd5', // 기본 색상 (연두색)
    '&.Mui-checked': {
        color: '#34c01f', // 체크된 색상 (연두색)
    },
    margin: 0, // 마진을 0으로 설정
    padding: 0, // 패딩을 0으로 설정
}

interface NumberOrCheckboxProps {
    id: number,
    index: number
}

const NumberOrCheckbox = ({ id, index }: NumberOrCheckboxProps) => {
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
        <div className="h-fit my-auto text-center">{index}</div>
    )
}

export default NumberOrCheckbox;
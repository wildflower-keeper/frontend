// Compo
import RecipientFilterConainer from "./RecipientFilterConainer";

// Utils
import { Dispatch, SetStateAction } from "react";

// Types
import { HomelessReadInfoType } from "@/api/v2/shelter-admin/type";


const StatusTypes = [
    "NO.",
    "이름",
    "전화번호",
]

interface Props {
    data: HomelessReadInfoType[]
    selectedUserList: number[]
    userType: number
    setUserType: Dispatch<SetStateAction<number>>
}

const RecipientList = ({ data, selectedUserList, userType, setUserType }: Props) => {
    const filteredData = userType === 0 ? data : data.filter(item => selectedUserList.includes(item.homelessId));
    return (
        <div>
            <RecipientFilterConainer userType={userType} setUserType={setUserType} />
            <div className="h-[300px] w-[400px] overflow-y-scroll">
                <div className="grid grid-cols-3 bg-neutral-100 pr-2" style={{
                    gridTemplateColumns: "1fr 1fr 3fr"
                }}>
                    {
                        StatusTypes.map((status, index) => (
                            <div key={index} className="basicRowStyle text-[14px]">
                                {status}
                            </div>
                        ))
                    }
                </div>
                {filteredData.map((userData, index) => (
                    <div key={index} className="grid grid-cols-3 border-t-[1px] border-solid border-neutral-200 text-[15px] py-1" style={{
                        gridTemplateColumns: "1fr 1fr 3fr"
                    }}>
                        <div className="basicRowStyle">
                            {index + 1}
                        </div>
                        <div className="basicRowStyle">
                            {userData.homelessName}
                        </div>
                        <div className="basicRowStyle">
                            {userData.homelessPhoneNumber}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipientList;
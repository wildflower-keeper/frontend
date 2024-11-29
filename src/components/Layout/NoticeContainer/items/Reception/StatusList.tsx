import { FaCheck } from "react-icons/fa6";

const StatusTypes = [
    "NO.",
    "이름",
    "전화번호",
    "수신여부"
]

const data = [
    {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: true
    },
    {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: true
    },
    {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: false
    }, {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: false
    }, {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: true
    },
    {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: false
    },
    {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: false
    },
    {
        name: "임동현",
        phoneNumber: "010-5559-9654",
        isReceived: false
    }
]

const StatusList = () => {
    return (
        <div className="overflow-y-scroll">
            <h1 className="mb-1">수신 리스트</h1>
            <div className="grid grid-cols-4 bg-neutral-100 pr-2" style={{
                gridTemplateColumns: "1fr 1fr 3fr 1fr"
            }}>
                {
                    StatusTypes.map((status, index) => (
                        <div key={index} className="basicRowStyle text-[14px]">
                            {status}
                        </div>
                    ))
                }
            </div>
            {data.map((userData, index) => (
                <div key={index} className="grid grid-cols-4 border-t-[1px] border-solid border-neutral-200 text-[15px] py-1" style={{
                    gridTemplateColumns: "1fr 1fr 3fr 1fr"
                }}>
                    <div className="basicRowStyle">
                        {index + 1}
                    </div>
                    <div className="basicRowStyle">
                        {userData.name}
                    </div>
                    <div className="basicRowStyle">
                        {userData.phoneNumber}
                    </div>
                    <div className="basicRowStyle">
                        <span className="flex justify-center items-center w-6 h-6 bg-[#FFF0F0]"><FaCheck className={`${userData.isReceived ? "text-neutral-300" : "text-green-500"}`} /></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StatusList;
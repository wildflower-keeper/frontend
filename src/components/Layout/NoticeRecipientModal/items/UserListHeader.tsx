const userDataTypeList = [
    "NO.",
    "이름",
    "전화번호",
    "전송여부"
]

const UserListHeader = () => {
    return (
        <div className="py-3 grid grid-cols-4 rounded-md font-bold text-sm"
            style={{
                gridTemplateColumns: "1fr 1fr 2fr 1fr"
            }}
        >
            {userDataTypeList.map((type, index) => (
                <div key={index} className="basicRowStyle">{type}</div>
            ))}
        </div>
    )
}

export default UserListHeader;
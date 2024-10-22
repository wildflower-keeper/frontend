import { ReactNode } from "react"

interface userManagementButtonProps {
    children: ReactNode
    type: String
    selected: boolean
    onClick: () => void
}

const UserManagementButton = ({children, type, selected, onClick}: userManagementButtonProps) => {
    return (
        <button onClick={onClick} className={`h-10 w-24 px-1.5 pl-3 py-2 rounded-[10px] hover:bg-[#efefef]
        border border-solid border-[#dfdfdf] items-center gap-3 inline-flex text-[#999999]
        ${selected ? 'bg-[#b7b7b7]' : 'bg-white'}`}
        >
            {children}
            <div className="w-9 text-base font-medium font-['Pretendard'] leading-normal">{type}</div>
        </button>
    )
}

export default UserManagementButton;
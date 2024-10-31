import { ReactNode } from "react"

interface openUserManagementProps {
    children: ReactNode
    type: String
    selected: boolean
    onClick: () => void
}

export const buttonStyle = "h-9 w-24 px-1.5 pl-3 py-2 rounded-[10px] border border-solid border-[#dfdfdf] items-center gap-3 justify-center inline-flex"

const OpenUserManagement = ({children, type, selected, onClick}: openUserManagementProps) => {
    return (
        <button onClick={onClick} className={`${buttonStyle} ${selected ? 'bg-[#b7b7b7]' : 'bg-white'} text-[#999999] hover:bg-[#efefef]`}
        >
            {children}
            <div className="w-9 text-base font-medium font-['Pretendard'] leading-normal">{type}</div>
        </button>
    )
}

export default OpenUserManagement;
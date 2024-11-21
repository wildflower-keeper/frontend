interface openUserManagementProps {
    type: String
    selected: boolean
    onClick: () => void
}

export const buttonStyle = "rounded-3xl px-3 py-1 border w-[75px] border-solid border-neutral-200 flex justify-center"

const OpenUserManagement = ({type, selected, onClick}: openUserManagementProps) => {
    return (
        <button onClick={onClick} className={`${buttonStyle} ${selected ? 'bg-[#3f3f3f] text-white' : null}`}
        >
            <div className="w-9 text-base font-medium font-['Pretendard'] leading-normal">{type}</div>
        </button>
    )
}

export default OpenUserManagement;
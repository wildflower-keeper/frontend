import { buttonStyle } from "./OpenUserManagement"

interface DeleteButtonProps {
    onDeleteClick: () => void, 
    onCancelDeleteClick: () => void,
}

const DeleteButton = ({onDeleteClick, onCancelDeleteClick}: DeleteButtonProps) => {
    return (
        <div className="flex flex-row items-center gap-2 px-3 py-1 bg-white rounded-[20px] shadow-xl">
            <button onClick={onDeleteClick} className={`bg-[#19c23d] text-white ${buttonStyle}`}>삭제</button>
            <button onClick={onCancelDeleteClick} className={`text-[#949494] ${buttonStyle}`}>취소</button>
        </div>
    )
};

export default DeleteButton;
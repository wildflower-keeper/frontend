import { buttonStyle } from "./OpenUserManagement"

interface DeleteButtonProps {
    onDeleteClick: () => void, 
    onCancelDeleteClick: () => void,
}

const DeleteButton = ({onDeleteClick, onCancelDeleteClick}: DeleteButtonProps) => {
    return (
        <div className="absolute top-12 right-0 w-[400px] flex flex-row items-center gap-2 px-3 py-1 bg-white rounded-[20px] shadow-2xl">
            이용자를 삭제하시겠습니까?
            <button onClick={onDeleteClick} className={`bg-black text-white ${buttonStyle}`}>삭제</button>
            <button onClick={onCancelDeleteClick} className={`text-[#949494] ${buttonStyle}`}>취소</button>
        </div>
    )
};

export default DeleteButton;
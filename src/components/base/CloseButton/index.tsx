import { IoCloseOutline } from "react-icons/io5"

interface Props {
    size: number,
    onClick?: () => void
}

const CloseButton = ({size, onClick}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`flex justify-center items-center bg-[#FFF0F0] size-${size}`}>
            <IoCloseOutline size={30} />
        </button>
    )
}

export default CloseButton;
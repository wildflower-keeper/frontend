interface Props {
    name: string,
    selected: boolean
    size: string
    onClick: () => void
}

const FilterButton = ({ name, onClick, selected, size }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`border border-solid border-neutral-500 py-1 px-2 rounded-md ${selected && "bg-[#555555] text-white"} ${size}`}
        >
            {name}
        </button>
    )
};

export default FilterButton;
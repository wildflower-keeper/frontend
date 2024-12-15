interface Props {
    name: string,
    size: string,
    selected: boolean,
    onClick: () => void
}

const FilterButton = ({ name, onClick, size, selected }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`border border-solid border-neutral-500 py-1 px-2 rounded-md ${size} ${selected && "bg-[#555555] text-white"}`}
        >
            {name}
        </button>
    )
};

export default FilterButton;
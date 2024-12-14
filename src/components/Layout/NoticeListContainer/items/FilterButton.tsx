interface Props {
    name: string,
    selected: boolean
    onClick: () => void
}

const FilterButton = ({ name, onClick, selected }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`border border-solid border-neutral-500 py-1 px-2 rounded-md ${selected && "bg-[#555555] text-white"}`}
        >
            {name}
        </button>
    )
};

export default FilterButton;
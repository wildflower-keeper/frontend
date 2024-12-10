interface Props {
    name: string
    onClick: () => void
}

const FilterButton = ({ name, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="border border-solid border-neutral-500 py-1 px-2 rounded-md"
        >
            {name}
        </button>
    )
};

export default FilterButton;
interface Props {
    name: string,
    size: string
    onClick: () => void
}

const FilterButton = ({ name, onClick, size }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`border border-solid border-neutral-500 py-1 px-2 rounded-md ${size}`}
        >
            {name}
        </button>
    )
};

export default FilterButton;
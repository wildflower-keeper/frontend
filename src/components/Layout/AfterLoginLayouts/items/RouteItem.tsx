import { IconType } from "react-icons/lib"

interface Props {
    selected: boolean,
    Icon: IconType,
    name: string
}

const RouteItem = ({selected, Icon, name}: Props) => {
    return (
        <div className={`flex flex-row gap-4 ${selected ? 'text-white' : 'text-black'}`}>
            <Icon
                size={26}
            />
            {name}
        </div>
    )
}

export default RouteItem;
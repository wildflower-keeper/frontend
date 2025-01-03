import { getPinNumber } from "@/api/v1/shelter-admin";
import { useQuery } from "@tanstack/react-query";
import { get } from "lodash";
import { useMemo } from "react";

const PinNumber = () => {
    const { data } = useQuery({
        queryKey: getPinNumber.queryKey(),
        queryFn: getPinNumber,
    });

    const pinNumber = useMemo(() => {
        return get(data, "pin", "0");
    }, [data]);
    return (
        <div className="flex flex-col justify-center items-start font-bold bg-[#EFEFEF] rounded-md w-[140px] mb-5 pl-3">
            <span className="text-xl">
                오늘의 핀번호
            </span>
            <span className="text-2xl">
                {pinNumber}
            </span>
        </div>
    )
}

export default PinNumber;
import UserList from "./UserList";
import UserListHeader from "./UserListHeader";
import SearchBar from "@/components/Composition/SearchBar";
import { homelessPeopleList } from "@/api/v1/shelter-admin";
import { HomelessPeopleListParam } from "@/api/v1/shelter-admin/type";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { get } from "lodash";

const UserListContainer = () => {
    const [param, setParam] = useState<HomelessPeopleListParam>({
        filterType: "NAME",
        filterValue: "",
        status: "",
        sleepoverTargetDate: new Date().toISOString(),
        pageNumber: 1,
        pageSize: 1000,
    });
    const queryKey = useMemo(() => {
        const queryKey = [...homelessPeopleList.queryKey(), param.filterType, param.filterValue, param.pageNumber];
        return queryKey;
    }, [homelessPeopleList, param]);
    const { data: homelessPeopleListData } = useQuery({
        queryFn: () => homelessPeopleList(param),
        queryKey,
    });
    const userItemList = useMemo(
        () => get(homelessPeopleListData, "items", []),
        [homelessPeopleListData],
    );
    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-bold">이용자 리스트</h1>
                <span className="scale-75 flex gap-2">
                <SearchBar
                        submitHandler={(filters, page) => {
                            setParam((prev) => ({ ...prev, ...filters, pageNumber: page }));
                        }}
                    />
                </span>
            </div>
            <UserListHeader />
            <UserList userItemList={userItemList} />
        </div>
    )
}

export default UserListContainer;
"use client";

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
// Utils
import React, { useMemo, useState } from "react";
import formatPhoneNumber from "@/utils/string/phone";
import { getEmergency } from "@/api/v1/shelter-admin";
import { simpleGenerateSecond } from "@/utils/number/time";
import { useQuery } from "@tanstack/react-query";
import { get, map } from "lodash";
import { formatDateString } from "@/utils/string/date";
// Types
import { GetSleepoverListParam } from "@/api/v1/shelter-admin/type";

interface EmergencyListItemType {
  name: string;
  phoneNumber: string;
  date: string;
}

/**
 * @description
 * userBoardList가 현재 재사용성이 없게 작성되어 있어 아래와 같이 작업하게 되었습니다.
 * 다음 스프린트 기간에 userBoardList를 리팩토링 하면서, 아래의 EmergencyList와 관련된 컴포넌트 삭제하도록 하겠습니다.
 */

export const EmergencyListHeader = () => {
  return (
    <div className="grid grid-cols-3 w-[500px] rounded-lg pr-8 py-3">
      <div>
        <p className="text-center">이름</p>
      </div>
      <div>
        <p className="text-center">전화번호</p>
      </div>
      <div>
        <p className="text-center">발생 시간</p>
      </div>
    </div>
  );
};

export const EmergencyListItem = ({
  name,
  phoneNumber,
  date,
}: EmergencyListItemType) => {
  return (
    <li>
      <div className="grid grid-cols-3 w-[500px] bg-white rounded-lg pr-8 py-3">
        <div>
          <p className="text-center">{name}</p>
        </div>
        <div>
          <p className="text-center">{phoneNumber}</p>
        </div>
        <div>
          <p className="text-center">{date}</p>
        </div>
      </div>
    </li>
  );
};

interface getEmergencyListParam extends GetSleepoverListParam {}

const EmergencyContainer = () => {
  const [param, setParam] = useState<getEmergencyListParam>({
    pageNumber: 1,
    pageSize: 5,
  });
  const { data } = useQuery({
    queryKey: getEmergency.queryKey(),
    queryFn: getEmergency,
    refetchInterval: simpleGenerateSecond([[3, "m"]]),
  });

  const formatingLogs = useMemo(() => {
    if (data) {
      return map(get(data, "logs", []), (log) => ({
        ...log,
        date: formatDateString(log.date, "yyyy-MM-dd HH:mm"),
        phNumber: formatPhoneNumber(log.phNumber),
      }));
    }
  }, [data]);

  const lastPageNumber = useMemo(() => {
    if (data) {
      return Math.ceil(data.logs.length / param.pageSize);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-9">
      <div>
        <p className=" font-semibold text-xl">긴급상황 발생내역</p>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <EmergencyListHeader />
          <ul className="flex flex-col gap-4 h-[330px]">
            {formatingLogs?.map(({ id, name, phNumber, date }) => (
              <EmergencyListItem
                key={id}
                name={name}
                phoneNumber={phNumber}
                date={date}
              />
            ))}
          </ul>
          <PagenationButtonContainer
            lastPageNumber={lastPageNumber}
            pageNumber={param.pageNumber}
            pageNumberHandler={(v) =>
              setParam((prev) => ({ ...prev, pageNumber: v }))
            }
          />
        </div>
        {/* <div className="bg-white p-4 rounded-lg flex flex-col gap-3">
          <Maps />
        </div> */}
      </div>
    </div>
  );
};

export default EmergencyContainer;

// Compo\
import NumberOrCheckbox from "./NumberOrCheckbox";
import StatusBadge from "./StatusBadge";

// Utils
import formatPhoneNumber from "@/utils/string/phone";
// Types
import type {
  UserBoardItemType,
} from "@/api/v1/shelter-admin/type";
import StatusControllerOpenToggle from "./StatusControllerOpenToggle";
import StatusToggleList from "./StatusToggleList";
import { useState } from "react";
const UserBoardItem = ({
  index,
  id,
  lastLocationStatus,
  name,
  phoneNumber,
  room,
  emergencyContact,
  reason,
  targetDateSleepover
}: UserBoardItemType) => {
  const baseStyle = "h-fit my-auto text-center"
  const [isOpenStatusList, setIsOpenStatusList] = useState(false);
  const onStatusClick = () => {
    setIsOpenStatusList((prev) => !prev);
  }
  return (
    <div className="py-3 bg-white grid grid-cols-8 place-items-cente text-sm border-b border-solid border-neutral-200">
      <NumberOrCheckbox id={id} index={index} />
      <div className={`${baseStyle} relative`}>
        {
          isOpenStatusList ?
            <StatusToggleList id={id} onStatusClick={onStatusClick} />
            :
            null
        }
        <StatusControllerOpenToggle onStatusClick={onStatusClick} lastLocationStatus={lastLocationStatus} >
          <StatusBadge
            lastLocationStatus={lastLocationStatus}
          />
        </StatusControllerOpenToggle>
      </div>
      <div className={`${baseStyle} truncate`}>{name}</div>
      <div className={`${baseStyle} truncate`}>{room}</div>
      <div className={`${baseStyle} min-w-[102px]`}>{formatPhoneNumber(phoneNumber)}</div>
      <div className={baseStyle}>{targetDateSleepover}</div>
      <div className={baseStyle}>{reason}</div>
      <div className={baseStyle}>{emergencyContact}</div>
    </div>
  );
};

export default UserBoardItem;

"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Button from "../Button";
//Types
import type { ShelterType } from "@/utils/api/v1/shelter-admin/type";

type CustomSelectBoxType = {
  shelters: ShelterType[];
  handleShelterChange: (value: number) => void;
};

const CustomSelectBox = ({
  shelters,
  handleShelterChange,
}: CustomSelectBoxType) => {
  const [opened, setOpend] = useState<boolean>(false);
  const [selectValue, setSelectValue] =
    useState<string>("센터를 선택해주세요.");
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const openedHandler = () => {
    setOpend(!opened);
  };

  const selectShelterHandler = (Id: number, name: string) => {
    handleShelterChange(Id);
    setSelectValue(name);
    setIsDefault(false);
    setOpend(false);
  };
  return (
    <div className={`flex flex-col gap-2 ${opened && "relative"}`}>
      <div className="p-2 bg-white w-full rounded-lg shadow-sm shadow-primary/30">
        <Button
          onClick={openedHandler}
          className="flex justify-between items-center w-full"
        >
          <p
            className={`${isDefault ? "text-fontWeak" : "text-black"} text-base`}
          >
            {selectValue}
          </p>
          {opened ? (
            <MdOutlineKeyboardArrowUp size={24} color="#00B226" />
          ) : (
            <MdOutlineKeyboardArrowDown size={24} color="#00B226" />
          )}
        </Button>
      </div>

      <ul
        className={`bg-white rounded-lg p-2 shadow-sm w-full shadow-primary/30 ${!opened ? "hidden" : "absolute top-12"}`}
      >
        {shelters?.map(({ shelterId, shelterName }) => {
          return (
            <li key={uuidv4()} className="w-full">
              <Button
                onClick={() => {
                  selectShelterHandler(shelterId, shelterName);
                }}
                className="w-full"
              >
                <p className="w-fit text-base">{shelterName}</p>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelectBox;

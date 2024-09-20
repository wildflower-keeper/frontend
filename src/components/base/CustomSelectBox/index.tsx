"use client";

// Compo
import Button from "../Button";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// Utils
import React, { useState } from "react";
import { getShelters } from "@/utils/api/v1/shared";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
//Types
import type { Dispatch, SetStateAction } from "react";
import type { LoginBodyType } from "@/utils/api/v1/shelter-admin/type";

interface Props {
  shelterChange: Dispatch<SetStateAction<LoginBodyType>>;
}

interface BoxParams {
  opened: boolean;
  selectName: string;
  isDefault: boolean;
}

const ShleterSelect = ({ shelterChange }: Props) => {
  const { data: shelters } = useQuery({
    queryKey: getShelters.queryKey(),
    queryFn: getShelters,
    initialData: [],
  });
  const [boxParams, setBoxParams] = useState<BoxParams>({
    opened: false,
    selectName: "센터를 선택해주세요",
    isDefault: true,
  });
  const selectShelterHandler = (id: number, name: string) => {
    shelterChange((prev) => ({ ...prev, id }));
    setBoxParams((prev) => ({ ...prev, selectName: name, opened: false }));
  };
  return (
    <div className={`flex flex-col gap-2 ${boxParams.opened && "relative"}`}>
      <div className="p-2 bg-white w-full rounded-lg shadow-sm shadow-primary/30">
        <Button
          onClick={() =>
            setBoxParams((prev) => ({
              ...prev,
              opened: !boxParams.opened,
              isDefault: false,
            }))
          }
          className="flex justify-between items-center w-full"
        >
          <p
            className={`${boxParams.isDefault ? "text-fontWeak" : "text-black"} text-base`}
          >
            {boxParams.selectName}
          </p>
          {boxParams.opened ? (
            <MdOutlineKeyboardArrowUp size={24} color="#00B226" />
          ) : (
            <MdOutlineKeyboardArrowDown size={24} color="#00B226" />
          )}
        </Button>
      </div>

      <ul
        className={`bg-white rounded-lg p-2 shadow-sm w-full shadow-primary/30 ${!boxParams.opened ? "hidden" : "absolute top-12"}`}
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

export default ShleterSelect;

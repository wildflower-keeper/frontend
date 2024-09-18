"use client";

import Button from "@/components/base/Button";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface Props {
  pageNumberHandler: (pageNum: number) => void;
  totalPages: number[];
  pageNumber: number;
}

const PagenationButtonContainer = ({
  totalPages,
  pageNumber,
  pageNumberHandler,
}: Props) => {
  const prevHandler = () => {
    if (pageNumber > 1) {
      pageNumberHandler(pageNumber - 1);
    }
  };

  const nextHandler = () => {
    if (pageNumber < totalPages.length) {
      pageNumberHandler(pageNumber + 1);
    }
  };

  return (
    <div className="w-full flex justify-between px-12">
      <Button onClick={prevHandler}>
        <MdOutlineKeyboardArrowLeft
          size={24}
          color="#828282"
          className="m-auto w-fit h-fit"
        />
      </Button>
      <div className="flex gap-1">
        {totalPages.map((value) => {
          return (
            <Button
              className="w-5 h-7"
              key={uuidv4()}
              onClick={() => {
                pageNumberHandler(value);
              }}
            >
              <p
                className={`text-[#828282] ${pageNumber === value && "font-bold text-black"}`}
              >
                {value}
              </p>
            </Button>
          );
        })}
      </div>
      <Button onClick={nextHandler}>
        <MdOutlineKeyboardArrowRight
          size={24}
          color="#828282"
          className="m-auto w-fit h-fit"
        />
      </Button>
    </div>
  );
};

export default PagenationButtonContainer;

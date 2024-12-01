"use client";

// Compo
import Button from "@/components/base/Button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// Utils
import React, { useMemo } from "react";
import totalPagesMaker from "@/utils/pagenation";
import { v4 as uuidv4 } from "uuid";
// Types

interface Props {
  pageNumberHandler: (v: number) => void;
  lastPageNumber?: number | null;
  pageNumber: number;
}

const PagenationButtonContainer = ({
  lastPageNumber,
  pageNumber,
  pageNumberHandler,
}: Props) => {
  const pageButtonList = useMemo(() => {
    return totalPagesMaker({
      currentPageNumber: pageNumber,
      lastPageNumber,
      pageListSize: 10,
    });
  }, [pageNumber, lastPageNumber]);

  if (!pageButtonList) return <></>;

  return (
    <div className="flex px-12 text-sm mt-2">
      <Button
        onClick={() => pageNumberHandler(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <MdOutlineKeyboardArrowLeft
          size={24}
          color="#828282"
          className="m-auto w-fit h-fit"
        />
      </Button>
      <div className="flex gap-1">
        {pageButtonList.map((value) => {
          return (
            <Button
              className="w-5 h-7"
              key={uuidv4()}
              onClick={() => {
                pageNumberHandler(value);
              }}
              disabled={pageNumber === value}
            >
              <p className={`${pageNumber === value ? "font-bold text-[#19C23D]" : ""}`}>{value}</p>

            </Button>
          );
        })}
      </div>
      <Button
        onClick={() => pageNumberHandler(pageNumber + 1)}
        disabled={pageNumber === lastPageNumber}
      >
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

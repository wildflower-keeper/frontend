import { range } from "lodash";

const totalPagesMaker = ({
  currentPageNumber,
  lastPageNumber,
  pageListSize,
}: {
  currentPageNumber: number | null;
  lastPageNumber: number | null | undefined;
  pageListSize: number;
}) => {
  if (!lastPageNumber || !currentPageNumber) return null;

  if (lastPageNumber === 1) return [1];

  const groupIndex = Math.floor((currentPageNumber - 1) / pageListSize);
  const startPoint = groupIndex * pageListSize + 1;
  const endPoint = Math.min((groupIndex + 1) * pageListSize, lastPageNumber);

  return range(startPoint, endPoint);
};

export default totalPagesMaker;

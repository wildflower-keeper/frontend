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

  const result = [];

  const groupIndex = Math.floor((currentPageNumber - 1) / pageListSize);
  const startPoint = groupIndex * pageListSize + 1;
  const endPoint = Math.min((groupIndex + 1) * pageListSize, lastPageNumber);

  for (let i = startPoint; i <= endPoint; i += 1) {
    result.push(i);
  }
  return result;
};

export default totalPagesMaker;

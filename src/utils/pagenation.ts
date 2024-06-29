const totalPagesMaker = (lastPageNumber: number) => {
  const result = [];
  for (let i = 1; i <= lastPageNumber; i += 1) {
    result.push(i);
  }
  return result;
};

export default totalPagesMaker;

interface daysType {
  [idx: number]: string;
}

const days: daysType = {
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토",
};

const dateInfo = () => {
  const today = new Date();
  return `${today.getMonth() + 1}월 ${today.getDate()}일 (${days[today.getDay()]}) ${String(today.getHours()).padStart(2, "0")}:${String(today.getUTCMinutes()).padStart(2, "0")}`;
};

const formatUpdateTime = (date: Date) => {
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${month}월 ${day}일 ${hours}시 ${minutes}분에 업데이트 되었습니다.`;
};

const formatDateTime = (date: Date, option?: "simple" | undefined) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return option
    ? `${year}-${month}-${day}`
    : `${year}-${month}-${day} ${hours}%3A${minutes}%3A${seconds}.000000`;
};

const dateComparison = (startDay: Date, endDay: Date) => {
  const today = new Date();
  if (startDay > today) {
    return "SCHEDULED";
  }
  if (startDay <= today && endDay >= today) {
    return "ONGOING";
  }
  return "CLOSED";
};
export { dateInfo, formatDateTime, formatUpdateTime, dateComparison };

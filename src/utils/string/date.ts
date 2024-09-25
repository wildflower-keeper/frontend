// Utils
import { format } from "date-fns";
import { ko } from "date-fns/locale";

type DateType = Date | string | number;
type DateFormatType = string;

export const dateComparison = (startDay: Date, endDay: Date) => {
  const today = new Date();
  if (startDay > today) {
    return "SCHEDULED";
  }
  if (startDay <= today && endDay >= today) {
    return "ONGOING";
  }
  return "CLOSED";
};

/**
 * 날짜를 포맷하는 유틸리티 함수
 * @param {Date | string | number} date - 포맷할 날짜
 * @param {string} dateFormat - 날짜 포맷 문자열
 * @returns {string} - 포맷된 날짜 문자열
 */
export const formatDateString = (
  date: DateType,
  dateFormat: DateFormatType,
) => {
  return format(new Date(date), dateFormat, { locale: ko });
};

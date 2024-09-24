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

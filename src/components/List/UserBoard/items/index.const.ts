export const LAST_LOCATION_STATUS = {
  COLOR: {
    OUT_SHELTER: "#FFC200",
    UNKNOWN: "#D9D9D9",
    IN_SHELTER: "#00B226",
    SLEEPOVER: "#FFC200",
  },
  STATUS: {
    OUT_SHELTER: "외출",
    UNKNOWN: "미확인",
    IN_SHELTER: "재실",
    SLEEPOVER: "외박"
  },
  CLASSNAME: {
    OUT_SHELTER: "bg-[#4d73ff]/10 text-[#4d73ff]",
    UNKNOWN: "bg-[#ff3d00]/10 text-[#ff3d00]",
    IN_SHELTER: "bg-[#00B226]/10 text-[#00B226]",
    SLEEPOVER: "bg-[#FFC200]/10 text-[#FFC200]",
  },
};

export const SLEEPOVER_SITUATION = {
  COLOR: {
    SCHEDULED: "#FFC200",
    CLOSED: "#D9D9D9",
    ONGOING: "#00B226",
  },
  CLASS_NAME: {
    SCHEDULED: "bg-[#FFC200]/10 text-[#FFC200] border-[#FFC200]",
    CLOSED: "bg-[#D9D9D9]/10 text-[#D9D9D9] border-[#D9D9D9]",
    ONGOING: "bg-[#00B226]/10 text-[#00B226] border-[#00B226]",
  },
  STATUS: {
    SCHEDULED: "외박 예정",
    CLOSED: "지난 외박",
    ONGOING: "오늘 외박",
  },
};

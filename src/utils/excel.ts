import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

const excelFileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const excelFileExtension = ".xlsx";
const excelFileName = "월간외박누적보고서";

const excelData = [
  {
    name: "김길동",
    content: "2024.06.28~ 2024.06.30",
  },
  {
    name: "고길동",
    content: "2024.06.10~ 2024.06.12",
  },
  {
    name: "이길동",
    content: "2024.06.11~ 2024.06.13",
  },
  {
    name: "신길동",
    content: "2024.06.05~ 2024.06.08",
  },
];

const excelDownloader = () => {
  const ws = XLSX.utils.aoa_to_sheet([[], [], ["이름", "기간"]]);
  excelData.map((data) => {
    XLSX.utils.sheet_add_aoa(ws, [[data.name, data.content]], {
      origin: -1,
    });
    ws["!cols"] = [{ wpx: 200 }, { wpx: 200 }];
    return false;
  });
  const wb: any = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelButter = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const excelFile = new Blob([excelButter], { type: excelFileType });
  FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
};

export default excelDownloader;

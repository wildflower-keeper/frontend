import { Point } from "@nivo/line";
import range from "lodash/range"

interface chartDataValueType {
    x: string
    y: number
}

export interface chartDataType {
    id: string;
    color: string | undefined;
    data: chartDataValueType[];
}

export const generateCountData = (countArray: number[] | undefined) => {
    const dataValueArray: chartDataValueType[] = [];
    (countArray || []).forEach((v, index) => {
        dataValueArray[index] = {
            "x": index + 1 + "일",
            "y": v
        }
    });

    return dataValueArray;
}

export const generateChartData = (id: string, color: string | undefined, countArray: number[] | undefined ) => ({
    id,
    color,
    data: generateCountData(countArray)
})

export const AXIS_Y = range(10, 200, 10);

export const generateMargin = (top: number, right: number, bottom: number, left: number ) => ({
    top,
    right,
    bottom,
    left
})
export const generateAxis = (size: number, padding: number, value: number[] | string[]) => ({
    tickSize: size,
    tickPadding: padding,
    tickValues: value
});

export const generateScale = (type: "point" | "linear", min: number, max: number) => ({
    type,
    min,
    max
});


export const generateStaticChartOption = () => {
    return {
      margin: generateMargin(10, 110, 50, 60),
      yScale: generateScale("linear", 0, 50),
      axisLeft: {format: (value: number) => `${value}명`, ...generateAxis(5, 5, AXIS_Y)},
      axisBottom: generateAxis(5, 5, ["1일", "8일", "15일", "22일", "30일"]),
      colors: (d: { color: string }) => d.color,
      axisTop: null,
      axisRight: null,
      useMesh: true,
      gridXValues: [],
      gridYValues: AXIS_Y,
      tooltip: ({ point }: { point: Point }) => (
        <div>{point.data.yFormatted}명</div>
      ),
    };
  };
  
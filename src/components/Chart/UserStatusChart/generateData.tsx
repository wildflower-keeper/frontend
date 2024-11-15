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

interface generateChartDataType {
    id: string
    color: string | undefined
    countArray: number[] | undefined
}

interface generateMarginType {
    top: number
    right: number
    bottom: number
    left: number
}

interface generateAxisType {
    size: number
    padding: number
    value: number[] | string[]
}

interface generateScaleType {
    type: "point" | "linear"
    min: number
    max: number
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

export const generateChartData = ({id, color, countArray}: generateChartDataType ) => ({
    id,
    color,
    data: generateCountData(countArray)
})

export const AXIS_Y = range(10, 200, 10);

export const generateMargin = ({top, right, bottom, left}: generateMarginType) => ({
    top,
    right,
    bottom,
    left
})
export const generateAxis = ({size, padding, value}: generateAxisType) => ({
    tickSize: size,
    tickPadding: padding,
    tickValues: value
});

export const generateScale = ({type, min, max}: generateScaleType) => ({
    type,
    min,
    max
});


export const generateStaticChartOption = () => {
    return {
      margin: generateMargin({top: 10, right: 110, bottom: 50, left: 60}),
      yScale: generateScale({type: "linear", min: 0, max: 50}),
      axisLeft: {format: (value: number) => `${value}명`, ...generateAxis({size: 5, padding: 5, value: AXIS_Y})},
      axisBottom: generateAxis({size: 5, padding: 5, value: ["1일", "8일", "15일", "22일", "30일"]}),
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
  
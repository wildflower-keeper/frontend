import { Point } from "@nivo/line";
import range from "lodash/range"

interface ChartDataValueType {
    x: string
    y: number
}

export interface ChartDataType {
    id: string;
    color: string | undefined;
    data: ChartDataValueType[];
}

interface GenerateChartDataType {
    id: string
    color: string | undefined
    countArray: number[] | undefined
}

export const generateCountData = (countArray: number[] | undefined) => {
    const dataValueArray: ChartDataValueType[] = [];
    (countArray || []).map((v, index) => {
        dataValueArray[index] = {
            "x": index + 1 + "일",
            "y": v
        }
    });

    return dataValueArray;
}

export const generateChartData = ({ id, color, countArray }: GenerateChartDataType) => ({
    id,
    color,
    data: generateCountData(countArray)
})

export const AXIS_Y = range(10, 200, 10);


export const generateStaticChartOption = () => {
    return {
        margin: { top: 10, right: 110, bottom: 50, left: 60 },
        yScale: { type: "linear" as const, min: 0, max: 50 },
        axisLeft: { format: (value: number) => `${value}명`, size: 5, padding: 5, tickValues: AXIS_Y },
        axisBottom: { size: 5, padding: 5, tickValues: ["1일", "8일", "15일", "22일", "30일"] },
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
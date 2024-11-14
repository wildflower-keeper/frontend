import range from "lodash/range"

interface chartDataValueType {
    x: string
    y: number
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

export const generateChartData = (id: string, color: string, countArray: number[] | undefined ) => ({
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
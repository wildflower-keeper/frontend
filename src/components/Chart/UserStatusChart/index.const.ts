import range from "lodash/range"

const AXIS_Y = range(10, 200, 10);

export const IMMUTABLE_CHART_OPTION = {
    margin: { top: 10, right: 110, bottom: 50, left: 60 },
    xScale: { type: 'point' as const },
    yScale: {
        type: 'linear' as const,
        min: 0,
        max: 100,
        stacked: false,
        reverse: false,
    },
    axisLeft: {
        format: (value: number) => `${value}명`,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: AXIS_Y,
    },
    axisBottom: {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: ["1일", "5일", "10일", "15일", "20일", "25일", "30일"],
    },
    axisTop: null,
    axisRight: null,
    gridXValues: [],  // 세로 선 없애기
    gridYValues: AXIS_Y  // 10명 단위로 그리드 선을 설정
}

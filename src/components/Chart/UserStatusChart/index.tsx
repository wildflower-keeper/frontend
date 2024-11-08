import { StatusCountType } from '@/components/Composition/CurrentCardContainer';
import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react';

interface chartDataValueType {
    x: string
    y: number
}

interface chartDataType {
    id: string,
    color: string,
    data: chartDataValueType[]
}

const UserStatusChart = ({ selectedStatusCount }: { selectedStatusCount: StatusCountType }) => {
    const a = [34, 52, 70, 24, 34, 52, 70, 24, 34, 52, 70, 24, 34, 52, 70, 24, 34, 52, 70, 24, 34, 52, 70, 24];
    const b = [20, 20, 50, 10, 20, 20, 50, 10, 20, 20, 50, 10, 20, 20, 50, 10, 20, 20, 50, 10, 20, 20, 50, 10];
    const c = [22, 42, 55, 19];
    const d = [10, 54, 35, 41];

    const generateData = (countArray: number[]) => {
        const dataValueArray: chartDataValueType[] = [];
        countArray.forEach((v, index) => {
            dataValueArray[index] = {
                "x": index + 1 + "일",
                "y": v
            }
        });

        console.log(dataValueArray)
        return dataValueArray;
    }

const chartData = [
    selectedStatusCount.inShelterCount ? { id: 'inShelterCount', color:"#19C23D", data: generateData(a) } : { id: 'a', data: [{ x: "1일", y: "0명" }] },
    selectedStatusCount.outShelterCount ? { id: 'outShelterCount', color:"#4D73FF", data: generateData(b) } : { id: 'b', data: [{ x: "1일", y: "0명" }] },
    selectedStatusCount.sleepoverCount ? { id: 'sleepoverCount', color:"#FEC53D", data: generateData(c) } : { id: 'c', data: [{ x: "1일", y: "0명" }] },
    selectedStatusCount.emergencyCount ? { id: 'emergencyCount', color:"#FF3D00", data: generateData(d) } : { id: 'd', data: [{ x: "1일", y: "0명" }] }
]
    return (
        <div className='w-full h-full bg-white mt-4 rounded-md'>
            <div className='flex justify-between p-5'>
                <div className='text-2xl font-bold'>데이터 추이</div>
                <div>10월</div>
            </div>
            <div className='h-[250px]'>
                <ResponsiveLine
                    data={chartData}
                    margin={{ top: 0, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: false,
                        reverse: false
                    }}
                    axisLeft={{
                        format: (value) => `${value}명`, // y축 값에 "명" 추가
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                    }}
                    colors={d => d.color}
                    axisTop={null}
                    axisRight={null}
                    useMesh
                    gridXValues={[]}  // 세로 선 없애기
                    tooltip={({ point }: { point: any }) => (
                        <div className=''>
                            {point.data.yFormatted}명
                        </div>
                    )}
                />
            </div>
        </div>

    )
}
export default UserStatusChart;
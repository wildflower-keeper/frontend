import { StatusCountDataType, SelectedStatusType } from '@/components/Composition/CurrentCardContainer';
import { Point, ResponsiveLine } from '@nivo/line'
import { useEffect, useMemo } from 'react';
import { AXIS_Y, generateAxis, generateChartData, generateMargin, generateScale } from './generateData';

interface Props { 
    selectedStatusCount: SelectedStatusType, 
    statusCountData: StatusCountDataType
}

const UserStatusChart = ({ selectedStatusCount, statusCountData }: Props) => {
    const chartData = useMemo(() => {
        const data = [];
        
        if (selectedStatusCount.inShelterCount) {
          data.push(generateChartData('inShelterCount', "#19C23D", statusCountData.inShelterCount));
        }
        if (selectedStatusCount.outingCount) {
          data.push(generateChartData('outingCount', "#4D73FF", statusCountData.outingCount));
        }
        if (selectedStatusCount.sleepoverCount) {
          data.push(generateChartData('sleepoverCount', "#FEC53D", statusCountData.sleepoverCount));
        }
        if (selectedStatusCount.emergencyCount) {
          data.push(generateChartData('emergencyCount', "#FF3D00", statusCountData.emergencyCount));
        }
      
        return data;
      }, [selectedStatusCount, statusCountData]);


      const isSelected = useMemo(() => {
        return Object.values(selectedStatusCount).find(v => Boolean(v)
        )
    }, [selectedStatusCount]);
    return (
        <div className='w-full h-full bg-white mt-4 rounded-md'>
            <div className='flex justify-between p-5'>
                <div className='text-2xl font-bold'>데이터 추이</div>
                <div>{new Date().getMonth() + 1}월</div>
            </div>
            <div className='h-[250px]'>
                {
                    isSelected &&
                    <ResponsiveLine
                        data={chartData}
                        margin={{...generateMargin(10, 110, 50, 60)}}
                        yScale={{...generateScale("linear", 0, 100)}}
                        axisLeft={{format: (value: number) => `${value}명`,
                        ...generateAxis(5, 5, AXIS_Y)}}
                        axisBottom={{...generateAxis(5, 5, ["1일", "8일", "15일", "22일", "30일"])}}
                        colors={d => d.color}
                        axisTop={null}
                        axisRight={null}
                        useMesh
                        gridXValues={[]}  // 세로 선 없애기
                        gridYValues={AXIS_Y}  // 10명 단위로 그리드 선을 설정
                        tooltip={({ point }: { point: Point }) => (
                            <div className=''>
                                {point.data.yFormatted}명
                            </div>
                        )}
                    />}
            </div>
        </div>

    )
}
export default UserStatusChart;
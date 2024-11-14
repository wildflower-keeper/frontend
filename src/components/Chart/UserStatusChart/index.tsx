import { StatusCountDataType, SelectedStatusType } from '@/components/Composition/CurrentCardContainer';
import { ResponsiveLine } from '@nivo/line'
import range from "lodash/range"
import { useEffect, useMemo } from 'react';
import { IMMUTABLE_CHART_OPTION } from './index.const';

interface Props { 
    selectedStatusCount: SelectedStatusType, 
    statusCountData: StatusCountDataType
}

interface chartDataValueType {
    x: string
    y: number
}

const UserStatusChart = ({ selectedStatusCount, statusCountData }: Props) => {
    const generateData = (countArray: number[] | undefined) => {
        const dataValueArray: chartDataValueType[] = [];
        (countArray || []).forEach((v, index) => {
            dataValueArray[index] = {
                "x": index + 1 + "일",
                "y": v
            }
        });

        return dataValueArray;
    }
    const isSelected = useMemo(() => {
        return Object.values(selectedStatusCount).find(v => Boolean(v)
        )
    }, [selectedStatusCount]);

    const chartData = useMemo(() => {
        const data = [];
        
        if (selectedStatusCount.inShelterCount) {
          data.push({ id: 'inShelterCount', color: "#19C23D", data: generateData(statusCountData.inShelterCount) });
        }
        if (selectedStatusCount.outingCount) {
          data.push({ id: 'outingCount', color: "#4D73FF", data: generateData(statusCountData.outingCount) });
        }
        if (selectedStatusCount.sleepoverCount) {
          data.push({ id: 'sleepoverCount', color: "#FEC53D", data: generateData(statusCountData.sleepoverCount) });
        }
        if (selectedStatusCount.emergencyCount) {
          data.push({ id: 'emergencyCount', color: "#FF3D00", data: generateData(statusCountData.emergencyCount) });
        }
      
        return data;
      }, [selectedStatusCount, statusCountData]);

    return (
        <div className='w-full h-full bg-white mt-4 rounded-md'>
            <div className='flex justify-between p-5'>
                <div className='text-2xl font-bold'>데이터 추이</div>
                <div>{new Date().getMonth() + 1}월</div>
            </div>
            <div className='h-[250px] shadow-xl'>
                {
                    isSelected &&
                    <ResponsiveLine
                        data={chartData}
                        {...IMMUTABLE_CHART_OPTION}
                        colors={d => d.color}
                        useMesh
                        tooltip={({ point }: { point: any }) => (
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
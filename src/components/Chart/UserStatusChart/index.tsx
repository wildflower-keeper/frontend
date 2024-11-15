import { StatusCountDataType, SelectedStatusType, statusCountType } from '@/components/Composition/CurrentCardContainer';
import { ResponsiveLine } from '@nivo/line'
import { useMemo } from 'react';
import { chartDataType, generateChartData, generateStaticChartOption } from './generateData';

interface Props {
  selectedStatusCount: SelectedStatusType,
  statusCountData: StatusCountDataType
}

const COLOR_MAP = new Map([
  ["inShelterCount", "#19C23D"],
  ["outingCount", "#4D73FF"],
  ["sleepoverCount", "#FEC53D"],
  ["emergencyCount", "#FF3D00"],
]);

const UserStatusChart = ({ selectedStatusCount, statusCountData }: Props) => {
  const visibleChartTypes = useMemo<statusCountType[]>(() => {
    const newTypesArray: statusCountType[] = [];
    for (const [key, value] of Object.entries(selectedStatusCount)) {
      if (value) newTypesArray.push(key as statusCountType);
    }
    return newTypesArray;
  }, [selectedStatusCount]);

  const chartData = useMemo(() => {
    const data: chartDataType[] = [];

    visibleChartTypes.forEach((type) => {
      data.push(generateChartData(type, COLOR_MAP.get(type), statusCountData[type]))
    })

    return data;
  }, [selectedStatusCount, statusCountData]);

  const chartOptions = useMemo(() => {
    const staticChartOption = generateStaticChartOption();
    return {
      ...staticChartOption,
      data: chartData,
    };
  }, [chartData]);

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
            {...chartOptions}
          />}
      </div>
    </div>

  )
}
export default UserStatusChart;
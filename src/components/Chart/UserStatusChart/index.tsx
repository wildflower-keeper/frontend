import { statusCountDataType, slectedStatusType } from '@/components/Composition/CurrentCardContainer';
import { ResponsiveLine } from '@nivo/line'

interface chartDataValueType {
    x: string
    y: number
}

const UserStatusChart = ({ selectedStatusCount, statusCountData }: { selectedStatusCount: slectedStatusType, statusCountData: statusCountDataType }) => {
    const generateData = (countArray: number[]) => {
        const dataValueArray: chartDataValueType[] = [];
        countArray.forEach((v, index) => {
            dataValueArray[index] = {
                "x": index + 1 + "일",
                "y": v
            }
        });

        return dataValueArray;
    }

    const isSelected = Object.values(selectedStatusCount).find(v => v === true);
    const axisY = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
    const defaultData = [{ x: "1일", y: "0명" }];
    const chartData = [
        selectedStatusCount.inShelterCount ? { id: 'inShelterCount', color: "#19C23D", data: generateData(statusCountData.inShelterCount) } : { id: 'a', data: defaultData },
        selectedStatusCount.outingCount ? { id: 'outingCount', color: "#4D73FF", data: generateData(statusCountData.outingCount) } : { id: 'b', data: defaultData },
        selectedStatusCount.sleepoverCount ? { id: 'sleepoverCount', color: "#FEC53D", data: generateData(statusCountData.sleepoverCount) } : { id: 'c', data: defaultData },
        selectedStatusCount.emergencyCount ? { id: 'emergencyCount', color: "#FF3D00", data: generateData(statusCountData.emergencyCount) } : { id: 'd', data: defaultData }
    ]
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
                        margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 0,
                            max: 100,
                            stacked: false,
                            reverse: false,
                        }}
                        axisLeft={{
                            format: (value) => `${value}명`, // y축 값에 "명" 추가
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            tickValues: axisY
                        }}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            tickValues: ["1일", "5일", "10일", "15일", "20일", "25일", "30일"] // 5일 단위로 x축 눈금 설정
                        }}
                        colors={d => d.color}
                        axisTop={null}
                        axisRight={null}
                        useMesh
                        gridXValues={[]}  // 세로 선 없애기
                        gridYValues={axisY}  // 10명 단위로 그리드 선을 설정
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
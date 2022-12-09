import Card from 'components/Card';
import Selector from 'components/Selector';
import sidoNames from 'constants/sidoNames';
import { DustInfo } from 'store/slices/dustSlice';

interface AllregionsProps {
  sido: string;
  setSido: React.Dispatch<React.SetStateAction<string>>;
  dustData: DustInfo[];
}
function AllRegions({ sido, setSido, dustData }: AllregionsProps) {
  return (
    <>
      <h1 className="pl-[40px] pt-[120px] pb-[136px] text-[64px] font-[rotobo]">
        전체 지역 보기
      </h1>
      <Selector regions={sidoNames} region={sido} setRegion={setSido} />
      <div>
        {dustData?.map((data) => {
          const {
            sidoName,
            stationName,
            pm10Grade,
            pm10Value,
            dataTime,
            isFavorite,
          } = data;
          return (
            <Card
              key={stationName}
              sidoName={sidoName}
              stationName={stationName}
              pm10Grade={pm10Grade}
              pm10Value={pm10Value}
              dataTime={dataTime}
              isFavorite={isFavorite}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllRegions;

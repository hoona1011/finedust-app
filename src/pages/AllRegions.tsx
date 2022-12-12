import Card from 'components/Card';
import Loading from 'components/Loading';
import Selector from 'components/Selector';
import sidoNames from 'constants/sidoNames';
import { DustInfo } from 'store/slices/dustSlice';

interface AllRegionsProps {
  sido: string;
  setSido: React.Dispatch<React.SetStateAction<string>>;
  dustData: DustInfo[];
  isLoading: boolean;
}
function AllRegions({ sido, setSido, dustData, isLoading }: AllRegionsProps) {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
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

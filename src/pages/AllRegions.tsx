import Card from 'components/Card';
import Selector from 'components/Selector';
import sidoNames from 'constants/sidoNames';
import useFetch from 'hooks/useFetch';

function AllRegions() {
  const { sido, setSido, dustData } = useFetch();
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

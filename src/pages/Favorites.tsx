import Card from 'components/Card';
import { useAppSelector } from 'store';

function Favorites() {
  const dustData = useAppSelector((state) => state.dust.dustInfos);
  const favoritedDustData = dustData.filter((data) => {
    return data.isFavorite === true;
  });

  if (favoritedDustData.length === 0) {
    return (
      <div className="text-[30px] font-[rotobo] font-bold text-center">
        즐겨찾기 등록된 지역이 없습니다
      </div>
    );
  }
  return (
    <div>
      {favoritedDustData?.map((data) => {
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
  );
}

export default Favorites;

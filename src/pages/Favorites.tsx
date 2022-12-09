import Card from 'components/Card';
import { DustInfo } from 'store/slices/dustSlice';

interface FavoritesProps {
  dustData: DustInfo[];
}

function Favorites({ dustData }: FavoritesProps) {
  const favoritedDustData = dustData.filter((data) => {
    return data.isFavorite === true;
  });
  return (
    <>
      <h1>즐겨찾기</h1>

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
    </>
  );
}

export default Favorites;

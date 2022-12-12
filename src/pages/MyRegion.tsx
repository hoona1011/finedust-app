import Selector from 'components/Selector';
import React, { useMemo } from 'react';
import sidoNames from 'constants/sidoNames';
import Card from 'components/Card';
import Loading from 'components/Loading';
import { DustInfo } from 'store/slices/dustSlice';

interface MyRegionProps {
  sido: string;
  setSido: React.Dispatch<React.SetStateAction<string>>;
  dustData: DustInfo[];
  myRegion: string;
  setMyRegion: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}
function MyRegion({
  sido,
  setSido,
  dustData,
  myRegion,
  setMyRegion,
  isLoading,
}: MyRegionProps) {
  const myRegions = useMemo(() => {
    return dustData.map((data) => {
      return data.stationName;
    });
  }, [dustData]);

  const filteredDustData = useMemo(() => {
    return dustData.filter((data) => {
      return data.stationName === myRegion;
    });
  }, [dustData, myRegion]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-center">
        <Selector regions={sidoNames} region={sido} setRegion={setSido} />
        <Selector
          regions={myRegions}
          region={myRegion}
          setRegion={setMyRegion}
        />
      </div>

      <div>
        {filteredDustData?.map((data) => {
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

export default MyRegion;

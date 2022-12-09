import React from 'react';
import { useAppDispatch } from 'store';
import { toggleFavorite } from 'store/slices/dustSlice';
import dustGrader from 'utils/dustGrader';

interface CardProps {
  stationName: string;
  sidoName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
  isFavorite: boolean;
}
function Card({
  stationName,
  sidoName,
  pm10Grade,
  pm10Value,
  dataTime,
  isFavorite,
}: CardProps) {
  const dispatch = useAppDispatch();

  const onFavoriteHandler = () => {
    dispatch(toggleFavorite(stationName));
  };

  return (
    <div>
      <div>{stationName}</div>
      <div>{sidoName}</div>
      <div>PM10 등급 : {dustGrader(pm10Grade)}</div>
      <div>PM10 미세먼지 수치: {pm10Value}</div>
      <div>({dataTime} 기준)</div>
      <button type="button" onClick={onFavoriteHandler}>
        {isFavorite ? '✔✔✔✔✔✔✔✔' : '해제됨'}
      </button>
    </div>
  );
}

export default Card;

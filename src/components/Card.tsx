import React from 'react';
import { useAppDispatch } from 'store';
import { toggleFavorite } from 'store/slices/dustSlice';
import dustGrader from 'utils/dustGrader';
import gradeToColorConverter from 'utils/gradeToColorConverter';
import { HeartIcon } from './Icons';

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
    <div className="m-[40px] rounded-[24px] drop-shadow-2xl p-[50px] text-[20px] bg-[#FBFBFB] font-bold">
      <button
        type="button"
        onClick={onFavoriteHandler}
        className="absolute top-[20px] right-[20px]"
      >
        <HeartIcon isFavorite={isFavorite} />
      </button>
      <div>{sidoName}</div>
      <div>{stationName}</div>
      <div className={`${gradeToColorConverter(pm10Grade)} text-[40px]`}>
        {dustGrader(pm10Grade)}
      </div>
      <div>미세먼지 수치: {pm10Value}</div>
      <div>({dataTime})</div>
    </div>
  );
}

export default Card;

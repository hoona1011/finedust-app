/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface DustInfo {
  stationName: string;
  sidoName: string;
  pm10Grade: string;
  pm10Value: string;
  dataTime: string;
  isFavorite: boolean;
}

interface DustInfos {
  dustInfos: DustInfo[] | [];
}
const initialState: DustInfos = {
  dustInfos: [],
};
export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    storeInfos(state, action) {
      const originalData = action.payload;

      const refinedData = originalData.map((data: any) => {
        const { stationName, sidoName, pm10Grade, pm10Value, dataTime } = data;

        return {
          stationName,
          sidoName,
          pm10Grade,
          pm10Value,
          dataTime,
          isFavorite: false,
        };
      });
      state.dustInfos = refinedData;
    },

    toggleFavorite(state, action) {
      state.dustInfos = state.dustInfos.map((item) => {
        return {
          ...item,
          isFavorite:
            action.payload === item.stationName
              ? !item.isFavorite
              : item.isFavorite,
        };
      });
    },
  },
});

export const { storeInfos, toggleFavorite } = dustSlice.actions;

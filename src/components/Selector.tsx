import React, { useCallback } from 'react';

interface SelectorProps {
  regions: string[];
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

function Selector({ regions, region, setRegion }: SelectorProps) {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRegion(e.target.value);
    },
    [setRegion]
  );
  return (
    <div className="relative w-full drop-shadow-xl px-[20px]">
      <select
        value={region}
        onChange={onChangeHandler}
        className="w-full p-2.5 text-[black] bg-white rounded-[10px] font-bold text-[20px]"
      >
        <option>지역을 선택하세요</option>
        {regions?.map((regionName: string) => (
          <option key={regionName}>{regionName}</option>
        ))}
      </select>
    </div>
  );
}

export default Selector;

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
    <div className="relative w-full lg:max-w-sm">
      <select
        value={region}
        onChange={onChangeHandler}
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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

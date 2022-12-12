import useFetch from 'hooks/useFetch';
import AllRegions from 'pages/AllRegions';
import Favorites from 'pages/Favorites';
import MyRegion from 'pages/MyRegion';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function Router() {
  const {
    sido,
    setSido,
    dustData,
    myRegion,
    setMyRegion,
    isLoading,
    getInfos,
  } = useFetch();

  useEffect(() => {
    getInfos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sido]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <AllRegions
              sido={sido}
              setSido={setSido}
              dustData={dustData}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="my-region"
          element={
            <MyRegion
              sido={sido}
              setSido={setSido}
              dustData={dustData}
              myRegion={myRegion}
              setMyRegion={setMyRegion}
              isLoading={isLoading}
            />
          }
        />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default Router;

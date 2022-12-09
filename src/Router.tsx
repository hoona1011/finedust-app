import AllRegions from 'pages/AllRegions';
import Favorites from 'pages/Favorites';
import MyRegion from 'pages/MyRegion';
import { Routes, Route } from 'react-router-dom';
import useFetch from 'hooks/useFetch';

function Router() {
  const { sido, setSido, dustData, myRegion, setMyRegion } = useFetch();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AllRegions sido={sido} setSido={setSido} dustData={dustData} />
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
          />
        }
      />
      <Route path="favorites" element={<Favorites dustData={dustData} />} />
    </Routes>
  );
}

export default Router;

import AllRegions from 'pages/AllRegions';
import Favorites from 'pages/Favorites';
import MyRegion from 'pages/MyRegion';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllRegions />} />
        <Route path="my-region" element={<MyRegion />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default Router;

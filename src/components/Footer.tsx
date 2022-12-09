import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AllRegionsIcon, FavoritesIcon, MyRegionIcon } from './Icons';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center fixed bottom-0 w-[50%]">
      <MyRegionIcon to="my-region" navigate={navigate} />
      <AllRegionsIcon to="/" navigate={navigate} />
      <FavoritesIcon to="/favorites" navigate={navigate} />
    </div>
  );
}

export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AllRegionsIcon, FavoritesIcon, MyRegionIcon } from './Icons';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between sticky top-0">
      <MyRegionIcon onClick={() => navigate('my-region')} />
      <AllRegionsIcon onClick={() => navigate('/')} />
      <FavoritesIcon onClick={() => navigate('/favorites')} />
      {/* <button type="button" onClick={() => navigate('my-region')}>
        내 지역
      </button>
      <button type="button" onClick={() => navigate('/')}>
        전체 지역
      </button>
      <button type="button" onClick={() => navigate('/favorites')}>
        즐겨찾기
      </button> */}
    </div>
  );
}

export default Footer;

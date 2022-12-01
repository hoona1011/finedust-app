import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate('my-region')}>
        내 지역
      </button>
      <button type="button" onClick={() => navigate('/')}>
        전체 지역
      </button>
      <button type="button" onClick={() => navigate('/favorites')}>
        즐겨찾기
      </button>
    </div>
  );
}

export default Footer;

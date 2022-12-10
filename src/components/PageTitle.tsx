import React from 'react';

function PageTitle({ pathName }: { pathName: string }) {
  const pathToTitle = (path: string) => {
    switch (path) {
      case '/':
        return '전체 지역 보기';
      case '/my-region':
        return '내 지역 보기';
      case '/favorites':
        return '즐겨찾기';
      default:
        return '페이지 오류';
    }
  };
  return (
    <div className="text-[40px] font-[rotobo] font-bold text-center py-[30px]">
      {pathToTitle(pathName)}
    </div>
  );
}

export default PageTitle;

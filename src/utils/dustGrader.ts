const dustGrader = (gradeNumber: string) => {
  switch (gradeNumber) {
    case '1':
      return '좋음';
    case '2':
      return '보통';
    case '3':
      return '나쁨';
    case '4':
      return '매우나쁨';

    default:
      return '값이 없음';
  }
};

export default dustGrader;

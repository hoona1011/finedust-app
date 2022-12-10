const gradeToColorConverter = (gradeNumber: string) => {
  switch (gradeNumber) {
    case '1':
      return 'text-[blue]';
    case '2':
      return 'text-[green]';
    case '3':
      return 'text-[#FBBA04]';
    case '4':
      return 'text-[red]';

    default:
      return 'text-[darkgray]';
  }
};

export default gradeToColorConverter;

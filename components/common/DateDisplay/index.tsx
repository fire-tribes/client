import { DateDisplayUI } from './style';

function DateDisplay() {
  const currentDate = new Date();
  return (
    <DateDisplayUI.Container>
      {currentDate.toDateString()}
    </DateDisplayUI.Container>
  );
}

export default DateDisplay;

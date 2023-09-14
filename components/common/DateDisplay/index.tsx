import { DateDisplayUI } from './style';

function DateDisplay() {
  // 날짜 데이터
  // const date = '2023-09-14T04:33:09.589Z';
  const DateData = [
    {
      date: new Date().toLocaleString('ko-KR', {
        month: 'long',
        day: 'numeric',
      }),
    },
  ];

  const today = new Date();
  const yesterday = new Date(today);

  // 어제 날짜 계산
  yesterday.setDate(today.getDate() - 1);

  const todayDate = today.toLocaleString('ko-KR', {
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    // weekday: 'long',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric',
  });
  const yesterdayDate = yesterday.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <DateDisplayUI.Container>
      today
      {DateData[0].date === todayDate
        ? '오늘'
        : DateData[0].date === yesterdayDate
        ? '어제'
        : DateData[0].date}
    </DateDisplayUI.Container>
  );
}

export default DateDisplay;

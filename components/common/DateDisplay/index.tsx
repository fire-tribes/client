import { DateDisplayUI } from './style';

interface DateDisplayProps {
  dateString: string;
}

function DateDisplay({ dateString }: DateDisplayProps) {
  const date = new Date(dateString);

  // 현재 날짜와 어제 날짜 생성
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // 날짜 포맷팅
  const formattedDate = date.toLocaleString('ko-KR', {
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    // weekday: 'long',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric',
  });

  // 오늘, 어제 또는 실제 날짜를 결정
  let displayDate = '';
  if (date.toDateString() === today.toDateString()) {
    displayDate = '오늘';
  } else if (date.toDateString() === yesterday.toDateString()) {
    displayDate = '어제';
  } else {
    displayDate = formattedDate;
  }
  return <DateDisplayUI.Container>{displayDate}</DateDisplayUI.Container>;
}

export default DateDisplay;

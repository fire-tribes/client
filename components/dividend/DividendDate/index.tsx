import Section from '@/components/Section';

const getYearAndMonth = (): [number, number] => {
  const today = new Date();
  return [today.getFullYear(), today.getMonth() + 1];
};

export default function DividendDate() {
  const [year, month] = getYearAndMonth();

  return (
    <Section.Title>
      {year}년 {month}월 배당금
    </Section.Title>
  );
}

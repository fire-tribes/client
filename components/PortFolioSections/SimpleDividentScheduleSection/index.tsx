import CommonFont from '@/components/Font';
import { ScheduleList } from '@/components/List/ScheduleList';
import Section from '@/components/Section';
import CommonBar from '@/components/common/Bar';
import FlexBox from '@/components/common/FlexBox';

export default function SimpleDividentScheduleSection() {
  return (
    <Section textAlign="left">
      <Section.Title paddingBottom="18px">배당 달력(8월)</Section.Title>
      <ScheduleList />
      <Section.Footer padding={'20px 0px'}>
        <FlexBox>
          <button onClick={() => alert('준비중입니다.')}>
            <CommonFont fontSize="body2" color="point_blue02">
              {'전체보기 >'}
            </CommonFont>
          </button>
        </FlexBox>
      </Section.Footer>
      <CommonBar />
    </Section>
  );
}

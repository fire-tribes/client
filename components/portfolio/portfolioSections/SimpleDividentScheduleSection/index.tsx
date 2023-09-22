import CommonFont from '@/components/common/Font';
import { ScheduleList } from '@/components/List/ScheduleList';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';

export default function SimpleDividentScheduleSection() {
  return (
    <Section textAlign="left">
      <Section.Title paddingBottom="18px">배당 달력(8월)</Section.Title>
      <ScheduleList />
      <Section.Footer padding={'20px 0px'}>
        <FlexBox>
          <button onClick={() => alert('준비중입니다.')}>
            <CommonFont fontSize="body2" color="point_blue02">
              <FlexBox gap="4px">
                전체보기
                <CommonIcon iconName="right_arrow" width={11} height={11} />
              </FlexBox>
            </CommonFont>
          </button>
        </FlexBox>
      </Section.Footer>
    </Section>
  );
}

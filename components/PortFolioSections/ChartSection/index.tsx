import CommonChart from '@/components/Chart';
import DividendDate from '@/components/DividendDate';
import CommonFont from '@/components/Font';
import Section from '@/components/Section';
import CommonCheckButton from '@/components/common/CheckButton';
import FlexBox from '@/components/common/FlexBox';

export default function ChartSection() {
  return (
    <Section textAlign="left" paddingTop="11px">
      <FlexBox justifyContent="space-between" paddingBottom="16px">
        <DividendDate />
        <FlexBox justifyContent="space-between">
          <FlexBox gap="14px">
            <CommonCheckButton fontSize="body3">소득세</CommonCheckButton>
            <CommonCheckButton fontSize="body3">4대보험</CommonCheckButton>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox
        flexDirection="column"
        alignItems={'start'}
        paddingBottom={'18px'}
      >
        <h1 style={{ paddingBottom: '6px' }}>389만원</h1>
        <CommonFont fontSize="body1" color="point_red01">
          지난 배당 대비 +151만원
        </CommonFont>
      </FlexBox>
      {
        // TODO: 차트 수정해야함
      }
      <CommonChart />
    </Section>
  );
}

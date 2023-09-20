import AnnualDividendBarChart from '@/components/Chart';
import DividendDate from '@/components/DividendDate';
import CommonFont from '@/components/Font';
import Section from '@/components/Section';
import CommonCheckButton from '@/components/common/CheckButton';
import FlexBox from '@/components/common/FlexBox';
import { useAnnualDividend } from '@/hook/useAnnualDividend';

export default function ChartSection() {
  const { annualDividendData } = useAnnualDividend();

  const chartSectionTexts = {
    title: `${annualDividendData?.annualDividend || 0}원`,
    subTitle: annualDividendData?.dividendChange
      ? `지난 배당 대비 ${annualDividendData?.dividendChange}`
      : '',
    isShowChart:
      annualDividendData?.monthlyDividends && annualDividendData?.annualDividend
        ? true
        : false,
  };
  const { title, subTitle, isShowChart } = chartSectionTexts;

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

      {
        // TODO: 여기부터 진정한 ChartSection
      }
      <FlexBox
        flexDirection="column"
        alignItems={'start'}
        paddingBottom={'18px'}
      >
        <h1 style={{ paddingBottom: '6px' }}>{title}</h1>
        <CommonFont fontSize="body1" color="point_red01">
          {subTitle}
        </CommonFont>
      </FlexBox>
      {isShowChart && <AnnualDividendBarChart />}
    </Section>
  );
}

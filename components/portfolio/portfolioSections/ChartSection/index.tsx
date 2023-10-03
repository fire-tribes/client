import AnnualDividendBarChart from '@/components/Chart';
import DividendDate from '@/components/dividend/DividendDate';
import CommonFont from '@/components/common/Font';
import Section from '@/components/Section';
import CommonCheckButton from '@/components/common/CheckButton';
import FlexBox from '@/components/common/FlexBox';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import NormalNotifyModal from '@/components/common/Modal/NormalNotifyModal';
import Modal from '@/components/common/Modal';
import { useEmotionTheme } from '@/hook/useThemeHooks';

export default function ChartSection() {
  const { annualDividendExchangeWithSimpleData } = useAnnualDividend();
  const { palette } = useEmotionTheme();

  const chartSectionTexts = {
    title: annualDividendExchangeWithSimpleData?.thisMonthDividend || '0원',
    subTitle: annualDividendExchangeWithSimpleData?.dividendChange
      ? `지난 배당 대비 ${annualDividendExchangeWithSimpleData?.dividendChange}%`
      : '',
    isShowChart:
      annualDividendExchangeWithSimpleData?.monthlyDividends &&
      Object.keys(annualDividendExchangeWithSimpleData?.monthlyDividends)
        .length &&
      annualDividendExchangeWithSimpleData?.annualDividend
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
            <CommonCheckButton fontSize="body3" isWait={false}>
              소득세
            </CommonCheckButton>
            <NormalNotifyModal
              title={'준비중입니다'}
              content={
                '4대 보험을 제한 결과값 도출은 곧 출시 예정입니다. 조금만 기다려주세요!'
              }
              button={
                <Modal.Button
                  height={'54px'}
                  sx={{
                    backgroundColor: palette.sementic.button_bg_gray_blue,
                    ':hover': {
                      backgroundColor: palette.sementic.button_bg_gray_blue,
                    },
                  }}
                >
                  확인
                </Modal.Button>
              }
            >
              <CommonCheckButton fontSize="body3" isWait>
                4대보험
              </CommonCheckButton>
            </NormalNotifyModal>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {
        // TODO: 여기부터 진정한 ChartSection 임으로 컴포넌트 분리진행
      }
      <FlexBox
        flexDirection="column"
        alignItems={'start'}
        paddingBottom={'18px'}
      >
        <h1 style={{ paddingBottom: '6px' }}>{title}</h1>
        <CommonFont
          fontSize="body1"
          color={
            annualDividendExchangeWithSimpleData?.dividendChange &&
            annualDividendExchangeWithSimpleData?.dividendChange > 0
              ? 'point_red01'
              : 'point_blue02'
          }
        >
          {subTitle}
        </CommonFont>
      </FlexBox>
      {isShowChart && <AnnualDividendBarChart />}
    </Section>
  );
}

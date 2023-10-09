import ModeController from '@/components/ModeController';
import CommonBar from '@/components/common/Bar';
import CommonHeader from '@/components/common/Header';
import CenterContent from '@/components/commonV2/CenterContent';
import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import ExchangeRateBox from '@/components/dividend/ExchangeRate';
import ChartSection from '@/components/portfolio/portfolioSections/ChartSection';
import DetailStocksSection from '@/components/portfolio/portfolioSections/DetailStocksSection';
import NotifyMessageSection from '@/components/portfolio/portfolioSections/NotifyMessageSection';
import SimpleDividentScheduleSection from '@/components/portfolio/portfolioSections/SimpleDividentScheduleSection';
import TotalStatisticsSection from '@/components/portfolio/portfolioSections/TotalStatisticsSection';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { useMonthlyCalanderDividendQuery } from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';
import { CircularProgress } from '@mui/material';

export default function V2Page() {
  const { status } = useMyPortFolio();
  useAnnualDividend();
  useMonthlyCalanderDividendQuery();

  return (
    <LayoutV2
      showBottomNavigator
      headMetaProps={{
        title: '스노우볼 - 배당 모아보기',
        image: '/icon/snow_logo.png',
      }}
    >
      {status === 'loading' ? (
        <CenterContent>
          <CircularProgress />
        </CenterContent>
      ) : (
        <div>
          <Padding paddingLeft={18} paddingRight={18} paddingTop={21}>
            <CommonHeader>
              <ModeController />
            </CommonHeader>
          </Padding>

          <Padding paddingLeft={18} paddingRight={18}>
            <ExchangeRateBox />
          </Padding>
          <Padding paddingLeft={18} paddingRight={18}>
            <ChartSection />
          </Padding>
          <Padding paddingLeft={18} paddingRight={18}>
            <TotalStatisticsSection />
          </Padding>
          <Padding paddingLeft={18} paddingRight={18}>
            <SimpleDividentScheduleSection />
          </Padding>

          <CommonBar />

          <Padding paddingLeft={18} paddingRight={18}>
            <DetailStocksSection />
          </Padding>
          <Padding paddingLeft={18} paddingRight={18}>
            <NotifyMessageSection />
          </Padding>
        </div>
      )}
    </LayoutV2>
  );
}

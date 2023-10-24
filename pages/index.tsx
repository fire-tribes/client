import ModeController from '@/components/ModeController';
import CommonBar from '@/components/common/Bar';
import CommonHeader from '@/components/common/Header';
import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import ExchangeRateBox from '@/components/dividend/ExchangeRate';
import ChartSection from '@/components/portfolio/portfolioSections/ChartSection';
import DetailStocksSection from '@/components/portfolio/portfolioSections/DetailStocksSection';
import NotifyMessageSection from '@/components/portfolio/portfolioSections/NotifyMessageSection';
import MonthlyCalanderDividendSection from '@/components/portfolio/portfolioSections/SimpleDividentScheduleSection';
import TotalStatisticsSection from '@/components/portfolio/portfolioSections/TotalStatisticsSection';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { useMonthlyCalanderDividend } from '@/hook/useMonthlyCalanderDividend';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { useShowToastInMain } from '@/hook/useShowToastInMain';

export default function V2Page() {
  useMyPortFolio();
  useMonthlyCalanderDividend();
  useAnnualDividend();

  useShowToastInMain();

  return (
    <LayoutV2
      showBottomNavigator
      headMetaProps={{
        title: '스노우볼 - 배당 모아보기',
      }}
    >
      <div>
        <Padding paddingLeft={18} paddingRight={18} paddingTop={21}>
          <CommonHeader>
            <ModeController hasPortfolio={true} />
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
          <MonthlyCalanderDividendSection />
        </Padding>

        <CommonBar />

        <Padding paddingLeft={18} paddingRight={18}>
          <DetailStocksSection />
        </Padding>
        <Padding paddingLeft={18} paddingRight={18}>
          <NotifyMessageSection />
        </Padding>
      </div>
    </LayoutV2>
  );
}

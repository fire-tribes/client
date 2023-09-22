import BadgeGroup from '@/components/dividend/BadgeGroup';
import { MyStockList } from '@/components/List/MyStockList';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { transferPrice } from '@/core/utils/transferPrice';
import { useExchageRate } from '@/hook/useExchageRate';
import { Typography } from '@mui/material';

export default function DetailStocksSection() {
  const { exchangeRate } = useExchageRate();
  const { myPortFolioData } = useMyPortFolio();

  /**
   * const hasNotStocks = !isLoading && !myPortFolioData;
   * 어차피 여기서는 데이터가 있을 경우에 보여주기만 하면 된다. 없을 경우는 그냥 안보여주면 되는데
   * TODO: 근데 다른건 다 정상적인데 이 부분만 비정상적으로 들어오는 경우도 있지 않을까?
   */

  return (
    <Section textAlign="left" paddingTop="18px">
      <FlexBox justifyContent={'space-between'} paddingBottom="16px">
        <Section.Title>보유 주식</Section.Title>
        <BadgeGroup />
      </FlexBox>
      <h1>
        {transferPrice({
          currentPrice: myPortFolioData?.totalValue,
          exchangeRate: exchangeRate,
          outputSymbol: 'KRW',
          defaultText: '0원',
        })}
      </h1>
      <Typography
        color={
          myPortFolioData?.totalValueChangeRate &&
          myPortFolioData?.totalValueChangeRate > 0
            ? 'error'
            : 'primary'
        }
        sx={{ paddingTop: '6px', paddingBottom: '18px' }}
      >
        {transferPrice({
          currentPrice: myPortFolioData?.totalValueChange,
          exchangeRate: exchangeRate,
          outputSymbol: 'KRW',
        })}{' '}
        {`(${myPortFolioData?.totalValueChangeRate || 0}%)`}
      </Typography>
      <MyStockList />
    </Section>
  );
}

transferPrice({
  currentPrice: undefined,
  exchangeRate: undefined,
  outputSymbol: 'KRW',
});

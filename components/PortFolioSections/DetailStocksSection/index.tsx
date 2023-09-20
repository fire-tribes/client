import BadgeGroup from '@/components/BdageTest';
import { MyStockList } from '@/components/List/MyStockList';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';
// import { transferPrice } from '@/core/utils/transferPrice';
// import { useExchageRate } from '@/hook/useExchageRate';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { Typography } from '@mui/material';

export default function DetailStocksSection() {
  const { myPortFolioData } = useMyPortFolio();

  // const hasNotStocks = !isLoading && !myPortFolioData;
  // 어차피 여기서는 데이터가 있을 경우에 보여주기만 하면 된다. 없을 경우는 그냥 안보여주면 된다.

  return (
    <Section textAlign="left" paddingTop="18px">
      <FlexBox justifyContent={'space-between'} paddingBottom="16px">
        <Section.Title>보유 주식</Section.Title>
        <BadgeGroup />
      </FlexBox>
      <h1>{myPortFolioData?.totalValue}</h1>
      <Typography
        color="error"
        sx={{ paddingTop: '6px', paddingBottom: '18px' }}
      >
        {myPortFolioData?.totalValueChange + '원'}
        {myPortFolioData?.totalValueChangeRate + '%'}
      </Typography>
      <MyStockList />
    </Section>
  );
}

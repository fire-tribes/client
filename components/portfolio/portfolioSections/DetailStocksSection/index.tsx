import BadgeGroup from '@/components/dividend/BadgeGroup';
import { MyStockList } from '@/components/List/MyStockList';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';

import { useMyPortFolioExchangeQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { Typography } from '@mui/material';

export default function DetailStocksSection() {
  const { data } = useMyPortFolioExchangeQuery();

  return (
    <Section textAlign="left" paddingTop="18px">
      <FlexBox justifyContent={'space-between'} paddingBottom="16px">
        <Section.Title>보유 주식</Section.Title>
        <BadgeGroup />
      </FlexBox>
      <h1>{data?.totalValue}</h1>
      <Typography
        color={
          data?.totalValueChangeRate && data?.totalValueChangeRate > 0
            ? 'error'
            : 'primary'
        }
        sx={{ paddingTop: '6px', paddingBottom: '18px' }}
      >
        {data?.totalValueChange} {`(${data?.totalValueChangeRate || 0}%)`}
      </Typography>
      <MyStockList />
    </Section>
  );
}

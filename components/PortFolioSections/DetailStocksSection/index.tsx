import BadgeGroup from '@/components/BdageTest';
import { MyStockList } from '@/components/List/MyStockList';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';
import { Typography } from '@mui/material';

export default function DetailStocksSection() {
  return (
    <Section textAlign="left" paddingTop="18px">
      <FlexBox justifyContent={'space-between'} paddingBottom="16px">
        <Section.Title>보유 주식</Section.Title>
        <BadgeGroup />
      </FlexBox>
      <h1>7억 4312만원</h1>
      <Typography
        color="error"
        sx={{ paddingTop: '6px', paddingBottom: '18px' }}
      >
        +2030만원 (79.5%)
      </Typography>
      <MyStockList />
    </Section>
  );
}

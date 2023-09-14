import CommonFont from '@/components/Font';
import FlexBox from '@/components/common/FlexBox';

// import type { PropsWithChildren } from 'react';
// export interface ExchangeRateProps extends PropsWithChildren {}

const mockExchangeRate = 1326.99;

export default function ExchangeRate() {
  return (
    <FlexBox justifyContent={'left'} gap="6px">
      <CommonFont fontSize={'caption'} color={'gray5'}>
        달러환율
      </CommonFont>
      <CommonFont fontSize={'caption'} color={'point_blue02'}>
        {mockExchangeRate}원
      </CommonFont>
    </FlexBox>
  );
}

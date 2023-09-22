import CommonFont from '@/components/common/Font';
import FlexBox from '@/components/common/FlexBox';
import { useExchangeRate } from '@/hook/useExchangeRate';

export default function ExchangeRateBox() {
  const { exchangeRate } = useExchangeRate();

  return (
    <FlexBox justifyContent={'left'} gap="6px">
      <CommonFont fontSize={'caption'} color={'gray5'}>
        달러환율
      </CommonFont>
      <CommonFont fontSize={'caption'} color={'point_blue02'}>
        {exchangeRate && exchangeRate}
      </CommonFont>
    </FlexBox>
  );
}

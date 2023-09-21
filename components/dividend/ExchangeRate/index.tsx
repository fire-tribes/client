import CommonFont from '@/components/common/Font';
import FlexBox from '@/components/common/FlexBox';
import { useExchageRate } from '@/hook/useExchageRate';

export default function ExchangeRateBox() {
  const { exchangeRate } = useExchageRate();

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

import FlexBox from '@/components/common/FlexBox';
import type { PropsWithChildren } from 'react';

export interface ExchangeRateProps extends PropsWithChildren {}

export default function ExchangeRate({ children }: ExchangeRateProps) {
  return (
    <FlexBox justifyContent={'left'} gap="6px">
      {children}
    </FlexBox>
  );
}

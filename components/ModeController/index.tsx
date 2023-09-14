import FlexBox from '@/components/common/FlexBox';
import IOSSwitch from '@/components/common/Switch/CommonIosSwitch';
import Image from 'next/image';

export default function ModeController() {
  return (
    <FlexBox justifyContent="space-between">
      <Image src="/icon/snow_logo.png" width={32} height={32} alt="snow" />
      <FlexBox gap="6px">
        심플모드
        <IOSSwitch />
      </FlexBox>
    </FlexBox>
  );
}

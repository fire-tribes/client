import CommonFont from '@/components/common/Font';
import FlexBox from '@/components/common/FlexBox';
import IOSSwitch from '@/components/common/Switch/CommonIosSwitch';
import { useControlSimpleMode } from '@/hook/useControlSimpleMode';
import Image from 'next/image';

interface ModeControllerProps {
  hasPortfolio: boolean;
}

export default function ModeController({ hasPortfolio }: ModeControllerProps) {
  const { modeData, toggleMode } = useControlSimpleMode();
  const { isSimple: isChecked, modeText } = modeData;

  return (
    <FlexBox justifyContent="space-between">
      <Image src="/icon/snowball_icon.png" width={32} height={32} alt="snow" />
      <FlexBox gap="6px">
        {hasPortfolio ? (
          <>
            <CommonFont fontSize="body3" color="gray7">
              {modeText}
            </CommonFont>
            <IOSSwitch onClick={toggleMode} checked={isChecked ?? false} />
          </>
        ) : (
          <div></div>
        )}
      </FlexBox>
    </FlexBox>
  );
}

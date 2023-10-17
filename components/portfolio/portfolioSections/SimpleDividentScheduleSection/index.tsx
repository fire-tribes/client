import CommonFont from '@/components/common/Font';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { useEmotionPalette } from '@/hook/useThemeHooks';
import { CenterModalV2 } from '@/components/commonV2/ModalV2/CenterModal';
import MonthlyCalanderDividendList from '@/components/List/MonthlyCalanderDividendList';

export default function MonthlyCalanderDividendSection() {
  const palette = useEmotionPalette();
  return (
    <Section textAlign="left">
      <Section.Title paddingBottom="18px">{`배당 달력 (${
        new Date().getMonth() + 1
      }월)`}</Section.Title>
      <MonthlyCalanderDividendList />
      <Section.Footer padding={'20px 0px'}>
        <FlexBox>
          <CenterModalV2
            title={'배당 달력'}
            content={'현재 배당 달력은 준비중입니다.'}
            button={
              <Modal.Button
                height={'54px'}
                sx={{
                  backgroundColor: palette.sementic.button_bg_gray_blue,
                  ':hover': {
                    backgroundColor: palette.sementic.button_bg_gray_blue,
                  },
                }}
              >
                확인
              </Modal.Button>
            }
          >
            <CommonFont
              fontSize="body2"
              color="point_blue02"
              component="button"
            >
              <FlexBox gap="4px">
                전체보기
                <CommonIcon iconName="right_arrow" width={11} height={11} />
              </FlexBox>
            </CommonFont>
          </CenterModalV2>
        </FlexBox>
      </Section.Footer>
    </Section>
  );
}

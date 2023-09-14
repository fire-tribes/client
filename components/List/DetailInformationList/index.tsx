import FlexBox from '@/components/common/FlexBox';
import { mockNotifyModalItemModel } from '@/mocks';
import NotifyListModal from '@/components/common/Modal/NotifyListModal';
import { CommonFontUI } from '@/components/Font/styles';
import styled from '@emotion/styled';
import type { BasicColorKeys } from '@/styles/palette';

type badgeDetailText = {
  title: string;
  content: string;
  color: BasicColorKeys;
};

const badangDetailTexts: badgeDetailText[] = [
  {
    title: '연간 총 배당금',
    content: '8810만원',
    color: 'gray9',
  },
  {
    title: '배당수익률',
    content: '6.9%',
    color: 'point_red01',
  },
  {
    title: '납부한 세금',
    content: '104만원',
    color: 'point_blue02',
  },
  {
    title: '납부할 세금',
    content: '49만원 예상',
    color: 'point_blue02',
  },
];

export default function DetailInformationList() {
  // useHooks get data

  return (
    <>
      {badangDetailTexts.map(({ title, content, color }, index) => {
        const shouldPaddingBottomZero = index === badangDetailTexts.length - 1;
        const paddingBottom = shouldPaddingBottomZero ? 0 : '16px';

        return (
          <NotifyListModal
            key={title}
            modalTitle={title}
            items={mockNotifyModalItemModel}
          >
            <FlexBox
              justifyContent="space-between"
              paddingBottom={paddingBottom}
            >
              <S.Title>{title}</S.Title>
              <S.Content color={color}>{content}</S.Content>
            </FlexBox>
          </NotifyListModal>
        );
      })}
    </>
  );
}

const S = {
  Title: styled(CommonFontUI.Font)`
    font-size: ${({ theme }) => theme.font.size.body1};
    font-weight: 500;
  `,
  Content: styled(CommonFontUI.Font)`
    font-size: ${({ theme }) => theme.font.size.body1};
    font-weight: 700;
  `,
};

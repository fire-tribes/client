import NotifyPopup from '@/components/Popup/NotifyPopup';
import FlexBox from '@/components/common/FlexBox';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const badangDetailTexts = [
  {
    title: '연간 총 배당금',
    content: '8810만원',
  },
  {
    title: '배당수익률',
    content: '6.9%',
  },
  {
    title: '납부한 세금',
    content: '104만원',
  },
  {
    title: '납부할 세금',
    content: '49만원 예상',
  },
];

export default function DetailInformationList() {
  // useHooks get data

  return (
    <>
      {badangDetailTexts.map(({ title, content }) => (
        <NotifyPopup key={title}>
          <FlexBox justifyContent="space-between" paddingBottom={2}>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
          </FlexBox>
        </NotifyPopup>
      ))}
    </>
  );
}

const S = {
  Title: styled(Typography)`
    font-size: ${({ theme }) => theme.font.body1};
    font-weight: 500;
  `,
  Content: styled(Typography)`
    font-size: ${({ theme }) => theme.font.body1};
    font-weight: 700;
  `,
};

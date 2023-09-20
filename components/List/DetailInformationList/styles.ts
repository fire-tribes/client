import { CommonFontUI } from '@/components/Font/styles';
import styled from '@emotion/styled';

export const S = {
  Title: styled(CommonFontUI.Font)``,
  Content: styled(CommonFontUI.Font)`
    font-size: ${({ theme }) => theme.font.size.body1};
    font-weight: 700;
  `,
};

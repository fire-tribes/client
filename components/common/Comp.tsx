// import styled from '@emotion/react';

import styled from '@emotion/styled';

export const Comp = () => {
  return <S.Button>button</S.Button>;
};

const S = {
  Button: styled.button`
    background-color: ${({ theme }) =>
      theme.palette.sementic.button_bg_gray_blue};
  `,
};

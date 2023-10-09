import { NAVIGATOR_HEIGHT } from '@/styles/constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const S = {
  Navigator: styled.nav`
    position: absolute;
    bottom: 0%;
    left: 0%;
    right: 0%;

    height: ${NAVIGATOR_HEIGHT}px;

    ${({ theme }) => css`
      background-color: ${theme.palette.sementic.bg_white};
      border-top: ${`1px solid ${theme.palette.basic.gray1}`};
    `}
  `,
  NavigatorItems: styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
  `,
  NavigationItem: styled.li`
    flex: 1;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
  NavigationLink: styled(Link)``,
};

export default S;

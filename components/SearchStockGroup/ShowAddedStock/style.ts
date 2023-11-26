import styled from '@emotion/styled';

const Container = styled.div`
  width: 106px;
  margin-right: 8px;

  border-radius: 30px;
  ${({ theme }) => `
    border: 1px solid ${theme.palette.basic.gray4};
    font-size: ${theme.font.size.body2}
  `}
`;

const ItemContainer = styled.div`
  margin: 8px 14px;
  width: 76px;
  height: 19px;
  display: flex;
  align-items: center;

  > div:first-of-type {
    flex: 1;
    width: 50px;
    margin-right: 10px;
    text-overflow: ellipsis;
    overflow: hidden;

    font-weight: 700;
  }
  div:last-of-type {
    margin-top: auto;
  }
`;

export const ShowAddedStockUI = {
  Container,
  ItemContainer,
} as const;

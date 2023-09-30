import styled from '@emotion/styled';

const Container = styled.div`
  height: calc(100vh - 16px - 49px - 92px - 36px - 52px);
  position: relative;
`;

const Item = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > div {
    margin-bottom: 20px;
    text-align: center;
  }
  > div:last-child {
    white-space: nowrap;
  }
`;

export const NothingStocksUI = {
  Container,
  Item,
};

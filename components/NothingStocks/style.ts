import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const Item = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -85%);

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

import styled from '@emotion/styled';

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
  Item,
};

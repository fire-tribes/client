import styled from '@emotion/styled';

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 6px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    height: 19px;
    line-height: 19px;
  }
`;

export const RecentSearchWordUI = {
  Container,
  Item,
  LeftContainer,
  RightContainer,
} as const;

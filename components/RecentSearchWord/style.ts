import styled from '@emotion/styled';

const Container = styled.article`
  padding: 16px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RecentSearchWordUI = {
  Container,
  Item,
  LeftContainer,
  RightContainer,
} as const;

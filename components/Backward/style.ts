import styled from '@emotion/styled';

const Container = styled.div``;

const Item = styled.div``;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomContainer = styled.div``;

export const BackwardUI = {
  Container,
  Item,
  TopContainer,
  BottomContainer,
} as const;

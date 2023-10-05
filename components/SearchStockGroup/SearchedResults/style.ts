import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  height: calc(100vh - 16px - 52px - 40px - 19px - 52px - 56px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  display: block;
  text-align: center;
`;

const SearchNothingContainer = styled.div`
  height: calc(100vh - 72px - 53px - 68.5px);
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${basic.gray6};
`;

export const SearchedResultsUI = {
  LoadingContainer,
  SearchNothingContainer,
  Button,
} as const;

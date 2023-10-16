import { basic } from '@/styles/palette';
import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BottomContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`;

const SearchNothingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  color: ${basic.gray6};
`;

export const SearchedResultsUI = {
  LoadingContainer,
  BottomContainer,
  SearchNothingContainer,
} as const;

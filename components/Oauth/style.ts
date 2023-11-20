import styled from '@emotion/styled';

type StyledLoginButtonProps = {
  backgroundColor: string;
};
export const StyledLoginButton = styled('a')<StyledLoginButtonProps>`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 7px;

  width: 220px;
  height: 58px;
  padding: 14px 18px;

  border-radius: 80px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

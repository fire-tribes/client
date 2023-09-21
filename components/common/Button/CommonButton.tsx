import { Button, ButtonProps, styled } from '@mui/material';
import { CSSProperties } from 'react';

export interface CommonButtonProps extends ButtonProps {
  height?: CSSProperties['height'];
  padding?: CSSProperties['padding'];
}

const CommonButton = ({
  children,
  color = 'primary',
  variant = 'contained',
  height,
  ...rest
}: CommonButtonProps) => {
  return (
    <StyledButton
      color={color}
      variant={variant}
      sx={{ height: height && height }}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  text-transform: none;
  min-height: 48px;
  border-radius: 10px;
  padding: 12px 16px;

  font-size: ${({ theme }) => theme.typography.body1};
  font-weight: 500;

  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export default CommonButton;

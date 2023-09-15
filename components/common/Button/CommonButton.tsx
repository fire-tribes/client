import { Button, ButtonProps, styled } from '@mui/material';

const CommonButton = ({
  children,
  color = 'primary',
  variant = 'contained',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton color={color} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  text-transform: none;

  font-weight: 300;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export default CommonButton;

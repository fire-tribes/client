import { Button, ButtonProps, styled } from '@mui/material';

interface ButtonCSSProps extends ButtonProps {
  isDisabled: boolean;
}

function BottomFixedButton({
  children,
  color = 'primary',
  variant = 'contained',
  isDisabled = false,
  ...rest
}: ButtonCSSProps) {
  return (
    <div style={{ width: '100%', position: 'fixed', bottom: '0' }}>
      <div style={{ margin: '16px' }}>
        <button disabled={isDisabled}>
          <StyledButton color={color} variant={variant} {...rest}>
            {children}
          </StyledButton>
        </button>
      </div>
    </div>
  );
}

const StyledButton = styled(Button)`
  width: 100%;

  text-transform: none;

  font-weight: 300;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export default BottomFixedButton;

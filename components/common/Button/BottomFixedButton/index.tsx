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
    <div>
      <span
        style={{
          position: 'fixed',
          minWidth: '320px',
          maxWidth: '430px',
          bottom: 92,
          width: '100%',
          height: '16px',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
        }}
      ></span>
      <div
        style={{
          position: 'fixed',
          minWidth: '320px',
          maxWidth: '430px',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <div style={{ margin: '16px' }}>
          <StyledButton
            color={color}
            variant={variant}
            {...rest}
            disabled={isDisabled}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            {children}
          </StyledButton>
        </div>
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

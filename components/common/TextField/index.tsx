import { TextField, TextFieldProps, styled } from '@mui/material';

const CommonTextField = ({
  children,
  size = 'medium',
  variant = 'filled',
  label,
  ...rest
}: TextFieldProps) => {
  return (
    <StyledTextField
      inputProps={{
        sx: {
          minHeight: 48,
        },
      }}
      size={size}
      variant={variant}
      label={label}
      {...rest}
    >
      {children}
    </StyledTextField>
  );
};

const StyledTextField = styled(TextField)``;

export default CommonTextField;

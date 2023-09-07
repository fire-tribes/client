// import { ButtonUI } from './style';
// import { Button, ButtonProps, styled } from '@mui/material';
// {
//   children,
//   color = 'primary',
//   variant = 'contained',
//   ...rest
// }: ButtonProps

import { PropsWithChildren } from 'react';

const CommonButton = ({ children }: PropsWithChildren) => {
  return (
    // <StyledButton color={color} variant={variant} {...rest}>
    //   {children}
    // </StyledButton>
    <div>{children}</div>
  );
};

// const StyledButton = styled(Button)`
//   text-transform: none;

//   font-weight: 300;
//   box-shadow: none;

//   &:hover {
//     box-shadow: none;
//   }
// `;

export default CommonButton;

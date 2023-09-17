import { Box, type BoxProps } from '@mui/material';

export default function FlexBox({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  ...rest
}: BoxProps) {
  return (
    <Box
      sx={{ display: 'flex' }}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </Box>
  );
}

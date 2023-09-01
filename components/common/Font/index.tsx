// import { css } from '@emotion/react';
// import styled from '@emotion/styled';

// interface FontProps {
//   value: string;
//   fontSize: string;
//   color: string;
//   backgroundColor: string;
// }

// // type FontStyledProps =
// type FontStyledProps = Omit<FontProps, 'value'>;

// export function Font({ value, fontSize, color, backgroundColor }: FontProps) {
//   return (
//     <StyledFont
//       styledProps={{
//         fontSize,
//         color,
//         backgroundColor,
//       }}
//     >
//       {value}
//     </StyledFont>
//   );
// }

// const StyledFont = styled.div<{ styledProps: FontStyledProps }>`
//   ${({ theme, styledProps }) => {
//     const { fontSize, color, backgroundColor } = styledProps;

//     const myStyle = css`
//       color: palette? fontSize: theme.fontSize;
//       font-size: fontSize ? fontSize: theme.fontSize;
//       background-color: backgroundColor && backgroundColor
//     `;

//     return myStyle;
//   }}
// `;

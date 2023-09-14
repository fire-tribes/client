import styled from '@emotion/styled';

import type { CSSProperties, PropsWithChildren } from 'react';

interface SectionContainerProps extends PropsWithChildren {
  textAlign?: CSSProperties['textAlign'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingBottom?: CSSProperties['paddingBottom'];
}

type CSSPadding = CSSProperties['padding'];
type SectionTitleProps = Pick<SectionContainerProps, 'paddingBottom'>;
type SectionFooterProps = { padding: CSSPadding };

function SectionContainer({
  children,
  textAlign = 'center',
  paddingTop,
  paddingBottom = 30,
}: SectionContainerProps) {
  return (
    <S.Container
      textAlign={textAlign}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </S.Container>
  );
}

const S = {
  Container: styled.section<Omit<SectionContainerProps, 'children'>>`
    text-align: ${({ textAlign }) => textAlign};

    padding-top: ${({ paddingTop }) => paddingTop};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
  `,
  SectionTitle: styled.h4<SectionTitleProps>`
    color: ${({ theme }) => theme.palette.sementic.font_section_title};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
  `,
  SectionSubTitle: styled.p``,
  SectionFooter: styled.div<SectionFooterProps>`
    padding: ${({ padding }) => padding};
  `,
};

const Section = Object.assign(SectionContainer, {
  Title: S.SectionTitle,
  SubTitle: S.SectionSubTitle,
  Footer: S.SectionFooter,
});

export default Section;

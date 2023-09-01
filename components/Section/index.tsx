import styled from '@emotion/styled';

import { CSSProperties, PropsWithChildren } from 'react';

interface SectionContainerProps extends PropsWithChildren {
  textAlign?: CSSProperties['textAlign'];
  paddingTop?: number;
  paddingBottom?: number;
}

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

    padding-top: ${({ paddingTop }) => `${paddingTop}px`};
    padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
  `,
  SectionTitle: styled.h4`
    color: ${({ theme }) => theme.palette.sementic.font_section_title};
  `,
  SectionSubTitle: styled.p``,
};

const Section = Object.assign(SectionContainer, {
  Title: S.SectionTitle,
  SubTitle: S.SectionSubTitle,
});

export default Section;

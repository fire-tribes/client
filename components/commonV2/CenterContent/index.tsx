import S from './style';
import { PropsWithChildren, ReactNode } from 'react';

interface CenterContentProps extends PropsWithChildren {
  title?: ReactNode;
}

export default function CenterContent({ title, children }: CenterContentProps) {
  return (
    <S.FullView>
      {title && title}
      <S.FullViewCenter>{children}</S.FullViewCenter>
    </S.FullView>
  );
}

import S from './style';
import HeadMeta, { HeadMetaProps } from '@/components/HeadMeta';
import CommonNewBottomNavigatior from '@/components/commonV2/NavigatorBar';

import { PropsWithChildren } from 'react';

interface LayoutV2Props extends PropsWithChildren {
  showBottomNavigator: boolean;
  headMetaProps: HeadMetaProps;
}

export default function LayoutV2({
  children,
  showBottomNavigator,
  headMetaProps,
}: LayoutV2Props) {
  return (
    <S.LayoutBody>
      <HeadMeta {...headMetaProps} />
      <S.LayoutMaxMin>
        <S.LayoutContent>{children}</S.LayoutContent>
        {showBottomNavigator && <CommonNewBottomNavigatior />}
      </S.LayoutMaxMin>
    </S.LayoutBody>
  );
}

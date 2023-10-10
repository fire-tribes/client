import S from './style';
import HeadMeta, { HeadMetaProps } from '@/components/HeadMeta';
import CommonNewBottomNavigatior from '@/components/commonV2/NavigatorBar';

import { PropsWithChildren, useEffect, useState } from 'react';

const useMobileFullView = () => {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    if (vh === 0) {
      setVh(window.innerHeight * 0.01);
    }

    const setScreenSize = () => {
      const vh = window.innerHeight * 0.01;
      setVh(vh);
    };

    window.addEventListener('resize', setScreenSize);

    return () => window.removeEventListener('resize', setScreenSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return vh;
};

interface LayoutV2Props extends PropsWithChildren {
  showBottomNavigator: boolean;
  headMetaProps: HeadMetaProps;
}

export default function LayoutV2({
  children,
  showBottomNavigator,
  headMetaProps,
}: LayoutV2Props) {
  const vh = useMobileFullView();
  return (
    <S.LayoutBody vh={vh}>
      <HeadMeta {...headMetaProps} />
      <S.LayoutMaxMin>
        <S.LayoutContent>{children}</S.LayoutContent>
        {showBottomNavigator && <CommonNewBottomNavigatior />}
      </S.LayoutMaxMin>
    </S.LayoutBody>
  );
}

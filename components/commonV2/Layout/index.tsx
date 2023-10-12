import S from './style';
import { ModalV2 } from '@/components/commonV2/ModalV2';

import HeadMeta, { HeadMetaProps } from '@/components/HeadMeta';
import CommonNewBottomNavigatior from '@/components/commonV2/NavigatorBar';
import { useControlModalV2 } from '@/hook/useControlModalV2';

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
  const { modalState } = useControlModalV2();
  return (
    <S.LayoutBody vh={vh}>
      <HeadMeta {...headMetaProps} />
      <S.LayoutMaxMin>
        <S.LayoutContent>{children}</S.LayoutContent>
        {showBottomNavigator && <CommonNewBottomNavigatior />}
        {modalState.isOpen && <ModalV2 />}
      </S.LayoutMaxMin>
    </S.LayoutBody>
  );
}

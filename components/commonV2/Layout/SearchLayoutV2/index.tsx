import S from './style';
import { ModalV2 } from '../../ModalV2';
import SnackbarV2 from '../../SnackbarV2';
import HeadMeta, { HeadMetaProps } from '@/components/HeadMeta';
import { useControlModalV2 } from '@/hook/useControlModalV2';
import { useState, type ReactNode, useEffect } from 'react';

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

interface SearchLayoutV2Props {
  /** Layout이 반영될 영역 */
  children: ReactNode;
  /** 하단 버튼의 존재 유무 */
  hasButton?: boolean;
  /** 하단 버튼의 비활성화 유무 */
  // isDisabled: boolean;
  /** 하단 버튼에 들어갈 이름(Content) */
  // buttonName: '다음' | '추가 완료' | '완료' | '수정 완료';
  /** 하단 고정 버튼 */
  buttomFixedButton: React.ReactNode;
  /** headMeta */
  headMetaProps: HeadMetaProps;
}

const SearchLayoutV2 = ({
  children,
  hasButton,
  buttomFixedButton,
  headMetaProps,
}: SearchLayoutV2Props) => {
  const vh = useMobileFullView();
  const { modalState } = useControlModalV2();
  return (
    <S.LayoutBody vh={vh}>
      <HeadMeta {...headMetaProps} />
      <S.LayoutMaxMin>
        <S.LayoutContent>{children}</S.LayoutContent>
        {hasButton ? buttomFixedButton : <div></div>}
        {modalState.isOpen && <ModalV2 />}
        <SnackbarV2 />
      </S.LayoutMaxMin>
    </S.LayoutBody>
  );
};

export default SearchLayoutV2;

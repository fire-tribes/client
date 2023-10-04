import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface SearchLayoutProps {
  /** Layout이 반영될 영역 */
  children: ReactNode;
  /** 하단 버튼의 존재 유무 */
  hasButton?: boolean;
  /** 하단 버튼의 비활성화 유무 */
  isDisabled: boolean;
  /** 하단 버튼에 들어갈 이름(Content) */
  buttonName: '다음' | '추가 완료' | '완료' | '수정 완료';
}

const SearchLayout = ({
  children,
  hasButton,
  isDisabled,
  buttonName,
}: SearchLayoutProps) => {
  return (
    <StyledLayout>
      <StyledContent>{children}</StyledContent>
      {hasButton ? (
        <BottomFixedButton isDisabled={isDisabled} buttonName={buttonName}>
          {buttonName}
        </BottomFixedButton>
      ) : (
        <div></div>
      )}
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  min-width: 320px;
  max-width: 430px;
  height: 100vh;
  margin: 0 auto;

  position: relative;
  overflow-x: hidden;

  /** Firefox에서 스크롤바 숨김 */
  scrollbar-width: none;
  /** IE/Edge에서 스크롤바 숨김 */
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    /** Chrome 및 Safari에서 스크롤바 숨김 */
    width: 0;
  }

  > div:last-child {
    position: absolute;
    z-index: 1;
  }
`;

const StyledContent = styled.section`
  min-height: 100vh;

  overflow-x: auto;

  padding: 16px 16px 56px 16px;
`;

export default SearchLayout;

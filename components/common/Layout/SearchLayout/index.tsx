import BottomFixedButton from '../../Button/BottomFixedButton';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  isDisabled: boolean;
  buttonName: '다음' | '추가 완료' | '완료' | '수정 완료';
  isSearchActive?: boolean;
}

const Layout = ({
  children,
  isDisabled,
  buttonName,
  isSearchActive,
}: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledContent>{children}</StyledContent>
      {!isSearchActive ? (
        <div></div>
      ) : (
        <BottomFixedButton isDisabled={isDisabled}>
          {buttonName}
        </BottomFixedButton>
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
`;

const StyledContent = styled.section`
  min-height: 100vh;

  padding: 16px 16px 56px 16px;
`;

export default Layout;

import CommonBottomNavigation from '@/components/common/Layout/CommonBottomNavigation';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledContent>{children}</StyledContent>
      <CommonBottomNavigation />
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  min-width: 320px;
  max-width: 430px;

  height: 100vh;

  margin: 0 auto;

  position: relative;
  overflow: hidden;
  text-align: center;
  border: 1px solid black;
  //
`;

const StyledContent = styled.section`
  min-height: 100vh;
  padding-bottom: 56px;
`;

export default Layout;

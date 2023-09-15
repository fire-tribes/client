import CommonBottomNavigatior from '@/components/common/Navigator';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledContent>{children}</StyledContent>
      <CommonBottomNavigatior />
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  min-width: 320px;
  max-width: 430px;
  height: 100vh;
  margin: 0 auto;
  position: relative;

  text-align: center;
`;

const StyledContent = styled.section`
  min-height: 100vh;

  padding: 16px 16px 56px 16px;
`;

export default Layout;

import CommonBottomNavigatior from '@/components/common/Navigator';
import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  showBottomNavigator?: boolean;
}

const Layout = ({ children, showBottomNavigator = true }: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledContent showBottomNavigator={showBottomNavigator}>
        {children}
      </StyledContent>
      {showBottomNavigator && <CommonBottomNavigatior />}
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

const StyledContent = styled.section<{ showBottomNavigator: boolean }>`
  min-height: 100vh;

  padding: ${({ showBottomNavigator }) =>
    showBottomNavigator ? '16px 16px 56px 16px' : '16px'};
`;

export default Layout;

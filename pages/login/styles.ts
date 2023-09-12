import styled from '@emotion/styled';

const Layout = styled.div`
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  gap: 48 20;
`;

const Title = styled.h2`
  margin-top: 48px;
  margin-bottom: 32px;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.font.body3};
`;

const Padding = styled.div`
  padding-top: 15px;
`;

export const LoginPageUI = {
  Layout,
  Content,
  Title,
  SubTitle,
  Padding,
};

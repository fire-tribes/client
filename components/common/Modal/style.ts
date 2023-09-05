import CommonButton from '@/components/common/Button/CommonButton';
import { fontSize } from '@/styles/typography';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CSSProperties } from 'react';

const fadeInKeyframs = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Dimmed = styled.section`
  z-index: 2000;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  animation-name: ${fadeInKeyframs};
  animation-duration: 0.3s;
`;

const Container = styled.div<{ minWidth: CSSProperties['minWidth'] }>`
  min-width: ${({ minWidth }) =>
    typeof minWidth === 'number' ? `${minWidth}px` : minWidth};

  background-color: white;
  border-radius: 10px;

  overflow: hidden;
`;

const TitleWrapper = styled.div`
  text-align: center;
  padding: 24px 24px 0px 24px;
`;

const Title = styled.strong`
  font-size: ${fontSize.h3};
  font-weight: 600;
`;

const ContentLabel = styled.div`
  font-size: ${fontSize.body3};
  font-weight: 500;
  text-align: left;
  margin-bottom: 6px;
  margin-top: 12px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const Content = styled.article<{ textAlign?: CSSProperties['textAlign'] }>`
  padding-top: 8px;
  padding-bottom: 24px;

  text-align: ${({ textAlign = 'center' }) => textAlign};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;

  padding: 0px 24px 24px 24px;
`;

const Button = styled(CommonButton)`
  flex-grow: 1;
  height: 44px;
`;

export const ModalUI = {
  Dimmed,
  Container,
  TitleWrapper,
  Title,
  ContentLabel,
  Content,
  Actions,
  Button,
} as const;

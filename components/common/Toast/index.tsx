// import { ToastUI } from './style';
// import useControlToast from '@/hook/useControlToast';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';

interface ToastProps {
  toastMessage?: string;
}

function Toast({ toastMessage }: ToastProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Container className={isMounted ? 'show' : 'hide'}>
      {toastMessage}
    </Container>
  );
}

const Container = styled.div`
  // 스타일링
  border-radius: 8px;
  ${({ theme }) => `
    background-color: ${theme.palette.basic.gray9};
    color: ${theme.palette.basic.white};
  `}
  width: 400px;
  padding: 16px 20px;
  text-align: center;

  // 위치
  position: fixed;
  left: 50%;
  bottom: 102px;
  transform: translateX(-50%);

  opacity: 0;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    bottom 0.3s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  &.hide {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
`;

export default Toast;

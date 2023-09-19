import styled from '@emotion/styled';

const Container = styled.div`
  // 스타일링
  border-radius: 8px;
  ${({ theme }) => `
    background-color: ${theme.palette.basic.gray9};
    color: ${theme.palette.basic.white};
  `}
  width: 100%;
  padding: 16px 20px;
  text-align: center;

  // 위치
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  opacity: 0.7;

  :active {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    transition:
      transform 0.3s ease,
      opacity 0.3 ease,
      bottom 0.3 ease;
  }
`;

export const ToastUI = {
  Container,
} as const;

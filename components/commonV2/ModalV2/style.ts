import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeInKeyframs = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeInUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
      transform: translateZ(0);
  }
`;

const ModalV2Styled = {
  ModalDimmed: styled.div<{ isBottomSheet: boolean }>`
    z-index: 2000;
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.5);
    animation-name: ${fadeInKeyframs};

    display: flex;
    justify-content: center;
    align-items: ${({ isBottomSheet }) => (isBottomSheet ? 'end' : 'center')};

    animation-name: ${fadeInKeyframs};
    animation-duration: 0.3s;
  `,
  ModalContainer: styled.div`
    width: 90%;
    padding: 24px 16px;

    overflow: hidden;
    background-color: ${({ theme }) => theme.palette.sementic.bg_white};

    // desktop
    @media (min-width: 430px) {
      width: 395px;
    }

    border-radius: 10px;
  `,
  BottomSheetModalContainer: styled.div`
    width: 100%;
    padding: 24px 16px;

    overflow: hidden;
    background-color: ${({ theme }) => theme.palette.sementic.bg_white};

    border-radius: 10px 10px 0 0;

    animation-name: ${fadeInUpKeyframes};
    animation-duration: 0.3s;
  `,
};

export default ModalV2Styled;

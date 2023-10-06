import styled from '@emotion/styled';

const StyledFullView = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledFullViewCenter = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const S = {
  FullView: StyledFullView,
  FullViewCenter: StyledFullViewCenter,
};

export default S;

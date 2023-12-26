import CommonFont from '@/components/common/Font';

import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import CenterContent from '@/components/commonV2/CenterContent';
import styled from '@emotion/styled';
import Image from 'next/image';

export default function index() {
  return (
    <LayoutV2
      showBottomNavigator
      headMetaProps={{
        title: '스노우볼 - 계산',
      }}
    >
      <CenterContent
        title={
          <Padding paddingLeft={16} paddingRight={16} paddingTop={21}>
            <StyledTitle>계산</StyledTitle>
          </Padding>
        }
      >
        <Image src={'/icon/ghost.png'} width={138} height={138} alt={'ghost'} />
        <StyledMessageSection>
          <CommonFont
            component="p"
            color="point_blue02"
            fontWeight="bold"
            fontSize="body1"
          >
            계산 탭은 아직 준비중입니다.
          </CommonFont>
          <CommonFont
            component="p"
            color="point_blue02"
            fontWeight="bold"
            fontSize="body1"
          >
            이런 기능이 들어갈 예정이에요.
          </CommonFont>
          <br />
          <CommonFont
            component="p"
            color="point_blue02"
            fontWeight="bold"
            fontSize="body1"
          >
            + 적립식 배당 성장 계산기
          </CommonFont>
          <CommonFont
            component="p"
            color="point_blue02"
            fontWeight="bold"
            fontSize="body1"
          >
            + 배당 재투자 계산기
          </CommonFont>
          <CommonFont
            component="p"
            color="point_blue02"
            fontWeight="bold"
            fontSize="body1"
          >
            + 연금 계산기
          </CommonFont>
        </StyledMessageSection>
      </CenterContent>
    </LayoutV2>
  );
}

const StyledTitle = styled.h2`
  height: 100%;

  font-weight: 900;
  text-align: left;
`;

const StyledMessageSection = styled.section`
  text-align: center;
  margin-top: 10px;
`;

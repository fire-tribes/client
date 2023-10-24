import CommonFont from '@/components/common/Font';
import CommonButton from '@/components/common/Button/CommonButton';

import FlexBox from '@/components/common/FlexBox';

import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import CenterContent from '@/components/commonV2/CenterContent';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404Page() {
  return (
    <LayoutV2
      showBottomNavigator={false}
      headMetaProps={{
        title: '스노우볼 - 404',
      }}
    >
      <CenterContent>
        <FlexBox flexDirection="column">
          <StyledTitle>페이지를 찾을 수 없어요</StyledTitle>
          <CommonFont
            component="p"
            fontSize="h4"
            fontWeight="bold"
            color="gray5"
          >
            다시 시도해 주세요
          </CommonFont>
          <StyledPadding />
          <Image
            src="/images/question_mark.png"
            width={32}
            height={32}
            alt="question"
          />
          <Image src="/images/chick.png" width={130} height={130} alt="chick" />
        </FlexBox>
      </CenterContent>
      <Padding paddingLeft={18} paddingRight={18}>
        <StyledBottom>
          <Link href={'/'}>
            <CommonButton fullWidth>뒤로 가기</CommonButton>
          </Link>
        </StyledBottom>
      </Padding>
    </LayoutV2>
  );
}

const StyledBottom = styled.footer`
  height: 72px;
`;

const StyledTitle = styled.h1`
  font-weight: 900;
  padding-bottom: 7px;
`;

const StyledPadding = styled.div`
  padding: 35px;
`;

import CommonFont from '@/components/Font';
import CommonButton from '@/components/common/Button/CommonButton';
import CommonCenter from '@/components/common/Center';
import FlexBox from '@/components/common/FlexBox';
import Layout from '@/components/common/Layout';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404Page() {
  return (
    <Layout showBottomNavigator={false}>
      <CommonCenter>
        <div>
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
            <Image
              src="/images/chick.png"
              width={130}
              height={130}
              alt="chick"
            />
          </FlexBox>
        </div>
      </CommonCenter>
      <StyledBottom>
        <Link href={'/'}>
          <CommonButton fullWidth>뒤로 가기</CommonButton>
        </Link>
      </StyledBottom>
    </Layout>
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

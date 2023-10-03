import CommonButton from '@/components/common/Button/CommonButton';
import CommonCenter from '@/components/common/Center';
import Layout from '@/components/common/Layout';
import styled from '@emotion/styled';

import Link from 'next/link';

export default function Custom404Page() {
  return (
    <Layout showBottomNavigator={false}>
      <CommonCenter>
        <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>
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

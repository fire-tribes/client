import CommonButton from '@/components/common/Button/CommonButton';
import CloudImage from '@/public/Cloud.png';
import PlusSvg from '@/public/icon/plus.svg';
import Layout from '@/components/common/Layout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

function Empty() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onMoveSearchPage = () => {
    setLoading(true);
    router.push('/search');
  };
  return (
    <Layout>
      <EmptyUI.Container>
        <EmptyUI.Item>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <div>
                <Image src={CloudImage} alt="Cloud Image" />
              </div>
              <div>
                배당 계산을 위해
                <tr /> 첫 주식을 추가해주세요.
              </div>
              <div>
                <CommonButton onClick={() => onMoveSearchPage()}>
                  <Image src={PlusSvg} alt="plus Svg" />
                  <span>주식 추가하기</span>
                </CommonButton>
              </div>
            </>
          )}
        </EmptyUI.Item>
      </EmptyUI.Container>
    </Layout>
  );
}

const Container = styled.div`
  height: calc(100vh - 55px - 17px);
  position: relative;
`;

const Item = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > div {
    margin-bottom: 20px;
    text-align: center;
  }
  >div: nth-child(2) {
    ${({ theme }) => `
      font-size: ${theme.font.size.body1};
      font-weight: ${theme.font.weight.bold};
    `}
  }
  > div:last-child {
    margin-bottom: 0;

    > button {
      padding: 10px 18px;

      border-radius: 30px;

      ${({ theme }) => `
        background-color: ${theme.palette.basic.gray1};
        
        color: ${theme.palette.basic.point_blue02};
        font-size: ${theme.font.size.h5};
        font-weight: ${theme.font.weight.bold};
      `}

      > span {
        margin-left: 8px;
      }
    }
  }
`;

export const EmptyUI = {
  Container,
  Item,
} as const;

export default Empty;

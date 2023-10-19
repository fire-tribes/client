import CommonButton from '@/components/common/Button/CommonButton';
import CloudImage from '@/public/Cloud.png';
import PlusSvg from '@/public/icon/plus.svg';
import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import CommonHeader from '@/components/common/Header';
import ModeController from '@/components/ModeController';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

function Empty() {
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: string };
  const [loading, setLoading] = useState(false);

  const onMoveSearchPage = () => {
    setLoading(true);

    const SEARCH_URL = '/search';

    if (portfolioId) {
      return router.push(`${SEARCH_URL}?portfolioId=${portfolioId}`);
    } else {
      router.push(SEARCH_URL);
    }
  };
  return (
    <LayoutV2
      showBottomNavigator
      headMetaProps={{
        title: '스노우볼 - 배당 모아보기',
        image: '/icon/snow_logo.png',
      }}
    >
      <Padding paddingLeft={18} paddingRight={18} paddingTop={21}>
        <CommonHeader>
          <ModeController hasPortfolio={false} />
        </CommonHeader>
      </Padding>
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
              <CommonButton onClick={onMoveSearchPage}>
                <Image src={PlusSvg} alt="plus Svg" />
                <span>주식 추가하기</span>
              </CommonButton>
            </div>
          </>
        )}
      </EmptyUI.Item>
    </LayoutV2>
  );
}

const Container = styled.div`
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

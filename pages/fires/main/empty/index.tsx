// import { EmptyUI } from './style';
import { basic } from '@/styles/palette';
import CommonButton from '@/components/common/Button/CommonButton';
// import MoneyBagImage from '@/public/Money_bag.png';
import CloudImage from '@/public/Cloud.png';
import PlusSvg from '@/public/icon/plus.svg';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Empty() {
  const router = useRouter();
  const onMoveSearchPage = () => {
    router.push('/fires/search');
  };
  return (
    <EmptyUI.Container>
      <EmptyUI.Item>
        <div>
          <Image src={CloudImage} alt="Cloud Image" />
        </div>
        <div>
          배당 계산을 위해
          <tr /> 첫 주식을 추가해주세요.
        </div>
        <div onClick={onMoveSearchPage}>
          <CommonButton>
            <Image src={PlusSvg} alt="plus Svg" />
            <span>주식 추가하기</span>
          </CommonButton>
        </div>
      </EmptyUI.Item>
    </EmptyUI.Container>
  );
}

const Container = styled.div`
  height: 100vh;
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
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }
  > div:last-child {
    margin-bottom: 0;

    > button {
      padding: 10px 18px;

      border-radius: 30px;
      background-color: ${basic.gray1};

      color: ${basic.point_blue02};
      font-family: Pretendard;
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;

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

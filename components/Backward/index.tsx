import { BackwardUI } from './style';
import backwardSvg from '@/public/icon/backward.svg';
import Image from 'next/image';

interface BackwardProps {
  title: string;
  object?: string | null;
}

function Backward({ title, object }: BackwardProps) {
  return (
    <BackwardUI.Container>
      <BackwardUI.Item>
        <BackwardUI.TopContainer>
          <div>
            <button>
              <Image src={backwardSvg} alt="backward Svg" />
            </button>
          </div>
          <div>{title}</div>
          <div></div>
        </BackwardUI.TopContainer>
        <BackwardUI.BottomContainer>
          {object === '보유 주식 편집' ? (
            <div>
              종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다. 종목을
              탭하면 보유 수량, 평단가를 수정할 수 있습니다.
            </div>
          ) : object === '보유 주식 정보 입력' ? (
            <button>현재가 전체 자동 입력</button>
          ) : (
            <div></div>
          )}
        </BackwardUI.BottomContainer>
      </BackwardUI.Item>
    </BackwardUI.Container>
  );
}

export default Backward;

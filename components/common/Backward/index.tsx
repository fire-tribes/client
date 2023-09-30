import { BackwardUI } from './style';
import backwardSvg from '@/public/icon/backward.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface BackwardProps {
  title: string;
}

function Backward({ title }: BackwardProps) {
  /** 버튼 클릭 시, 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <BackwardUI.Container>
      <BackwardUI.Item>
        <BackwardUI.TopContainer>
          <button onClick={handleGoBack}>
            <Image src={backwardSvg} alt="backward Svg" />
          </button>
          <div>{title}</div>
          <div></div>
        </BackwardUI.TopContainer>
      </BackwardUI.Item>
    </BackwardUI.Container>
  );
}

export default Backward;

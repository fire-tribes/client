import { BackwardUI } from './style';
import backwardSvg from '@/public/icon/backward.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface BackwardProps {
  title: string;
  hasBeforePath?: string;
}

function Backward({ title, hasBeforePath = '없음' }: BackwardProps) {
  /** 버튼 클릭 시, 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    if (hasBeforePath === '없음') {
      router.back();
    } else if (hasBeforePath === '개별 편집 페이지') {
      router.push('/edit');
    } else if (hasBeforePath === '전체 편집 페이지') {
      router.push('/');
    }
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

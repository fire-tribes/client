import { BackwardUI } from './style';
// import AlertModal from '../Modal/AlertModal';
// import { CenterModalV2 } from '@/components/commonV2/ModalV2/CenterModal';
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
  const { slug } = router.query as { slug: string[] };

  const portfolioId = Number(slug?.[0]);

  const handleGoBack = () => {
    if (hasBeforePath === '없음') {
      router.back();
    } else if (hasBeforePath === '개별 편집 페이지') {
      router.push(`/edit?portfolioId=${portfolioId}`);
    } else if (hasBeforePath === '전체 편집 페이지') {
      router.push('/');
    }
  };

  return (
    <BackwardUI.Container>
      <BackwardUI.Item>
        <BackwardUI.TopContainer>
          {/* {hasBeforePath === '전체 편집 페이지' ? (
            <AlertModal
              title={'편집 초기화'}
              message={`지금 돌아가면 편집한 내용이 초기화됩니다. 그래도 '메인 페이지'로 돌아가시겠습니까?`}
              onClickEvent={() => handelTotalEditPageButton()}
            >
              <button>
                <Image src={backwardSvg} alt="backward Svg" />
              </button>
            </AlertModal>
          ) : (
            <button onClick={handleGoBack}>
              <Image src={backwardSvg} alt="backward Svg" />
            </button>
          )} */}
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

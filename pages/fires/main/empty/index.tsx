import AlertModal from '@/components/common/AlertModal';
import Link from 'next/link';

function Empty() {
  return (
    <div>
      <AlertModal
        type={'confirm'}
        title={'준비중입니다.'}
        message={
          '4대 보험을 제한 결과값 도출은 곧 출시 예정입니다. 조금만 기다려주세요!'
        }
      />
      <AlertModal
        type={'alert'}
        title={'최근 검색어 삭제'}
        message={'최근 검색어를 모두 삭제하시겠어요?'}
      />
      <div>
        <div>돈주머니 이미지</div>
        <div>
          <strong>배당 계산을 위해 첫 주식을 추가해주세요.</strong>
        </div>
        <Link href="/fires/search">
          <span>+ 주식 추가하기</span>
        </Link>
      </div>
    </div>
  );
}

export default Empty;

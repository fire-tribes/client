import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import SearchLayoutV2 from '@/components/commonV2/Layout/SearchLayoutV2';

function TestPage() {
  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = async () => {
    console.log('hello world');
  };

  return (
    <SearchLayoutV2
      bottomFixedButton={
        <BottomFixedButton
          isDisabled={false}
          onChange={onMoveOtherPages}
          isLoading={false}
        >
          수정 완료
        </BottomFixedButton>
      }
      hasButton={true}
      headMetaProps={{
        title: '스노우볼 - 배당 정보 편집',
      }}
    >
      <div>Component5가 있던 자리</div>
    </SearchLayoutV2>
  );
}

export default TestPage;

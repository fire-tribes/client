import CommonBadge from '@/components/common/Badge';
import CommonIcon from '@/components/common/Icon';

export default function BadgeTest() {
  return (
    <>
      <CommonBadge
        variant="contained"
        onClick={() => alert('편집버튼 클릭')}
        leftIcon={<CommonIcon iconName={'list_select'} />}
      >
        편집
      </CommonBadge>
      <CommonBadge
        variant="contained"
        onClick={() => alert('추가버튼 클릭')}
        leftIcon={<CommonIcon iconName={'add_circle'} />}
      >
        추가
      </CommonBadge>
    </>
  );
}

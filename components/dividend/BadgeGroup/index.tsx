import CommonBadge from '@/components/common/Badge';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';
import Link from 'next/link';

export default function BadgeGroup() {
  return (
    <FlexBox gap="6px">
      <CommonBadge
        variant="contained"
        onClick={() => alert('편집버튼 클릭')}
        leftIcon={<CommonIcon iconName={'list_select'} />}
      >
        편집
      </CommonBadge>
      <Link href={'/fires/search'}>
        <CommonBadge
          variant="contained"
          leftIcon={<CommonIcon iconName={'add_circle'} />}
        >
          추가
        </CommonBadge>
      </Link>
    </FlexBox>
  );
}
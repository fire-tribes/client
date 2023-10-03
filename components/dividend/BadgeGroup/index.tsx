import CommonBadge from '@/components/common/Badge';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import Link from 'next/link';

export default function BadgeGroup() {
  const { myPortFolioData } = useMyPortFolio();
  return (
    <FlexBox gap="6px">
      <Link
        href={{
          pathname: '/fires/edit',
          query: {
            portfolioId: myPortFolioData?.portfolioId,
          },
        }}
      >
        <CommonBadge
          variant="contained"
          leftIcon={<CommonIcon iconName={'list_select'} />}
        >
          편집
        </CommonBadge>
      </Link>
      <Link
        href={{
          pathname: '/fires/search',
          query: {
            portfolioId: myPortFolioData?.portfolioId,
          },
        }}
      >
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

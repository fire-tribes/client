import S from './style';
import CommonFont from '@/components/common/Font';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';

import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavagationItem {
  href: string;
  label: string;
  iconName: string;
}

const navagationItems: NavagationItem[] = [
  {
    href: '/',
    label: '홈',
    iconName: 'home',
  },
  {
    href: '/caculate',
    label: '계산',
    iconName: 'chart',
  },
  {
    href: '/setting',
    label: '설정',
    iconName: 'setting',
  },
];

export default function BottomNavigatorV2() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <S.Navigator>
      <S.NavigatorItems>
        {navagationItems.map(({ href, label, iconName }) => (
          <S.NavigationItem key={label}>
            <Link href={href}>
              <FlexBox flexDirection={'column'} gap={'4px'}>
                <CommonIcon
                  iconName={
                    pathname === href ? `emphasis_${iconName}` : iconName
                  }
                  width={24}
                  height={24}
                />
                <CommonFont
                  fontSize="caption2"
                  color={pathname === href ? 'gray9' : 'gray6'}
                >
                  {label}
                </CommonFont>
              </FlexBox>
            </Link>
          </S.NavigationItem>
        ))}
      </S.NavigatorItems>
    </S.Navigator>
  );
}

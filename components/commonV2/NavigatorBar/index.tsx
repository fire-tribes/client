import S from './style';
import CommonFont from '@/components/common/Font';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';

import { useRouter } from 'next/router';

interface NavagationItem {
  href: string;
  label: string;
  iconName: string;
}

const navagationItems: NavagationItem[] = [
  {
    href: '/v2',
    label: '홈',
    iconName: 'home',
  },
  {
    href: '/v2/caculate',
    label: '계산',
    iconName: 'chart',
  },
  {
    href: '/v2/setting',
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
            <S.NavigationLink href={href}>
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
            </S.NavigationLink>
          </S.NavigationItem>
        ))}
      </S.NavigatorItems>
    </S.Navigator>
  );
}

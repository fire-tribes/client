import CommonFont from '@/components/Font';
import FlexBox from '@/components/common/FlexBox';
import CommonIcon from '@/components/common/Icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default function CommonNewBottomNavigatior() {
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

const S = {
  Navigator: styled.nav`
    position: fixed;
    bottom: 0%;

    min-width: 320px;
    max-width: 430px;
    width: 100vw;
    height: 55px;
    padding: 8px 34px;

    ${({ theme }) => css`
      background-color: ${theme.palette.sementic.bg_white};
      border-top: ${`1px solid ${theme.palette.basic.gray1}`};
    `}
  `,
  NavigatorItems: styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  NavigationLink: styled(Link)``,
  NavigationItem: styled.li`
    flex: 1;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
};

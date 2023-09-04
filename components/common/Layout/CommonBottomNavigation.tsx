import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationItem {
  href: string;
  label: string;
  iconName: string;
}

const navigationItems: NavigationItem[] = [
  {
    href: '/',
    label: '홈',
    iconName: 'house',
  },
  {
    href: '/chart',
    label: '계산',
    iconName: 'chart',
  },
  {
    href: '/setting',
    label: '설정',
    iconName: 'setting',
  },
];

const CommonBottomNavigation = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        width: 1.0,
        minWidth: '320px',
        maxWidth: '430px',
        borderTop: '1px solid gray',
      }}
    >
      {navigationItems.map(({ label, href, iconName }) => (
        <BottomNavigationAction
          key={label}
          label={label}
          icon={
            <Link href={href}>
              <Image
                src={`/icons/${iconName}.svg`}
                alt={label}
                width={20}
                height={20}
              />
            </Link>
          }
        />
      ))}
    </BottomNavigation>
  );
};

export default CommonBottomNavigation;

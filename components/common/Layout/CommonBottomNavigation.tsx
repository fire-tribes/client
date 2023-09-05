import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface NavagationItem {
  href: string;
  label: string;
  iconName: string;
}

const navagationItems: NavagationItem[] = [
  {
    href: '/',
    label: '',
    iconName: 'house',
  },
  {
    href: '/chart',
    label: '',
    iconName: 'chart',
  },
  {
    href: '/setting',
    label: '',
    iconName: 'setting',
  },
];

const CommonBottomNavigation = () => {
  return (
    <BottomNavigation
      showLabels={false}
      sx={{
        position: 'absolute',
        bottom: 0,
        width: 1.0,
        borderTop: '1px solid gray',
      }}
    >
      {navagationItems.map(({ label, href, iconName }) => (
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

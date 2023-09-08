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
    iconName: 'home',
  },
  {
    href: '/fires/chart',
    label: '',
    iconName: 'chart',
  },
  {
    href: '/fires/setting',
    label: '',
    iconName: 'setting',
  },
];
// TODO: svg 파일을 클라이언트 단에서 url로 불러오는게 아니라 SSR을 통해 인라인되서 오게하면 어떨까?
const CommonBottomNavigatior = () => {
  return (
    <BottomNavigation
      showLabels={false}
      sx={{
        position: 'fixed',
        minWidth: '320px',
        maxWidth: '430px',
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
                src={`/icon/emphasis_${iconName}.svg`}
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

export default CommonBottomNavigatior;

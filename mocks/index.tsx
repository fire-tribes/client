import { NotifyListItemProps } from '@/components/common/Modal/NotifyListModal';
import { Typography } from '@mui/material';

export const mockNotifyModalItemModel: NotifyListItemProps[] = [
  {
    title: '투자 배당률',
    subTitle: '주식을 산 시점의 가격을 반영한 배당율',
    value: <Typography sx={{ color: 'red' }}>6.9%</Typography>,
  },
  {
    title: '시가 배당률',
    subTitle: '현재 변동한 주식 가격을 반영한 배당율',
    value: <Typography sx={{ color: 'red' }}>6.7%</Typography>,
  },
];

export const mockNotifyModalItemModel2: NotifyListItemProps[] = [
  {
    title: '배당소득세 (15%)',
    subTitle: '2023년 1월 ~ 현재',
    value: <Typography sx={{ color: 'blue' }}>준비 중</Typography>,
  },
  {
    title: '4대보험',
    subTitle: '',
    value: <Typography sx={{ color: 'blue' }}>준비 중</Typography>,
  },
];

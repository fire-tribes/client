import NotifyModal from '@/components/common/Modal/NotifyModal';
import { List, ListItem, ListItemText } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

/**
 * // custom이 필요한 경우 아래와 같이 구현 이렇게 color등을변경할 수 있다.

const datas: StockNotifyModalItem[] = [
  {
    title: <p>투자 배당률</p>,
    subTitle: '주식을 산 시점의 가격을 반영한 배당율',
    value: <p>6.9%</p>,
  },
  {
    title: '시가 배당률',
    subTitle: '현재 변동한 주식 가격을 반영한 배당율',
    value: <p style={{color: 'red'}}>6.7%</p>,
  },
];
 */

export interface NotifyListItemProps {
  title: ReactNode;
  subTitle: ReactNode;
  value: ReactNode;
}

interface StockNotifyModalProps extends PropsWithChildren {
  modalTitle: string;
  items: NotifyListItemProps[];
}

// 컨텐츠에 집중하기 위한 컴포넌트

export default function NotifyListModal({
  modalTitle,
  items,
  children,
}: StockNotifyModalProps) {
  return (
    <NotifyModal
      title={modalTitle}
      content={
        <List>
          {items.map(({ title, subTitle, value }, index) => (
            <ListItem key={index}>
              <ListItemText primary={title} secondary={subTitle}></ListItemText>
              <ListItemText
                primary={value}
                sx={{ textAlign: 'right' }}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      }
    >
      {children}
    </NotifyModal>
  );
}

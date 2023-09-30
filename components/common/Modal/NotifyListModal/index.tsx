import NotifyModal from '@/components/common/Modal/NotifyModal';
import { List, ListItem, ListItemText } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

export interface NotifyListItemProps {
  title: ReactNode;
  subTitle: ReactNode;
  value: ReactNode;
}

interface StockNotifyModalProps extends PropsWithChildren {
  modalTitle: string;
  items: NotifyListItemProps[] | [];
}

export default function NotifyListModal({
  modalTitle,
  items,
  children,
}: StockNotifyModalProps) {
  if (!items || items.length === 0) return <>{children}</>;

  return (
    <NotifyModal
      title={modalTitle}
      content={
        <List disablePadding sx={{ paddingTop: '2px' }}>
          {items.map(({ title, subTitle, value }, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ padding: '12px 0px 6px 0px' }}
            >
              <ListItemText
                primary={title}
                secondary={subTitle}
                sx={{ margin: 0 }}
              />
              <ListItemText
                primary={value}
                sx={{ textAlign: 'right', margin: 0 }}
              />
            </ListItem>
          ))}
        </List>
      }
    >
      {children}
    </NotifyModal>
  );
}

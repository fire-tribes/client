import CommonFont from '@/components/common/Font';
import Modal from '@/components/common/Modal';
import { BottomSheetModalV2 } from '@/components/commonV2/ModalV2';
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

export default function AnnualDividendModal({
  modalTitle,
  items,
  children,
}: StockNotifyModalProps) {
  if (!items || items.length === 0) return <>{children}</>;

  return (
    <BottomSheetModalV2
      title={
        <CommonFont
          fontSize="h4"
          fontWeight="bold"
          textAlign="left"
          component="h4"
        >
          {modalTitle}
        </CommonFont>
      }
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
      button={<Modal.Button height={'54px'}>확인</Modal.Button>}
    >
      {children}
    </BottomSheetModalV2>
  );
}

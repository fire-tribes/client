import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
} from '@mui/material';
// import NotifyPopup from '@/components/Popup/NotifyPopup';

interface ScheduleItemModel {
  date: string;
  icon: string;
  ticker: string;
  cost: string;
  costDate: string;
}

const datas: ScheduleItemModel[] = [
  {
    date: '6일',
    icon: '💥',
    ticker: 'JEPI',
    cost: '219만원',
    costDate: '9월 3일 지급 예상',
  },
  {
    date: '21일',
    icon: '💥',
    ticker: 'SCHD',
    cost: '101만원',
    costDate: '9월 9일 지급 예상',
  },
];

export function ScheduleList() {
  return (
    <Box>
      <List disablePadding>
        {datas.map(({ date, ticker, cost, costDate }) => (
          // <NotifyPopup key={ticker}>
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: 0, gap: '9px' }}>
                <ListItemText secondary={date} sx={{ maxWidth: 32 }} />
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Avatar />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography fontWeight={700}>{ticker}</Typography>}
                />
                <ListItemText
                  primary={<Typography fontWeight={700}>{cost}</Typography>}
                  secondary={costDate}
                  sx={{ textAlign: 'right' }}
                />
              </ListItemButton>
            </ListItem>
          </>
          // </NotifyPopup>
        ))}
      </List>
    </Box>
  );
}

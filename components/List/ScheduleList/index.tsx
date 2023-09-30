import { useMonthlyCalanderDividendExchangeQuery } from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';
import CommonFont from '@/components/common/Font';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from '@mui/material';

export function ScheduleList() {
  const { data } = useMonthlyCalanderDividendExchangeQuery();

  return (
    <Box>
      <List disablePadding>
        {data?.map(({ stockCode, 예상배당금지급일, 예상배당금 }) => (
          <>
            <ListItem disablePadding sx={{ gap: '9px' }}>
              <ListItemText
                secondary={예상배당금지급일.toLocaleDateString()}
                sx={{ maxWidth: 32 }}
              />
              <ListItemIcon sx={{ minWidth: 0 }}>
                <Avatar />
              </ListItemIcon>
              <ListItemText
                primary={
                  <CommonFont fontWeight="bold" color="gray9">
                    {stockCode}
                  </CommonFont>
                }
              />
              <ListItemText
                primary={
                  <CommonFont fontWeight="bold" color="gray7">
                    {예상배당금}
                  </CommonFont>
                }
                secondary={
                  <CommonFont
                    fontSize="caption2"
                    fontWeight="regular"
                    color={'gray6'}
                  >
                    {'?'}
                  </CommonFont>
                }
                sx={{ textAlign: 'right' }}
              />
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
}

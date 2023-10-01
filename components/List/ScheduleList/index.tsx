// import {
//   useMonthlyCalanderDividendExchangeQuery,
//   useMonthlyCalanderDividendQuery,
// } from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';
import { DividendCalanderModel } from '@/@types/models/dividend';
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
  // const { data } = useMonthlyCalanderDividendExchangeQuery();
  // const { data } = useMonthlyCalanderDividendQuery();
  const mockData: DividendCalanderModel[] = [
    {
      tickerCode: 'JEPI',
      stockCode: '',
      expectedPayDate: '2022-09-07',
      exDividendDate: '2022-09-01',
      expectedDividends: 7.27,
      currencyType: 'USD',
    },
    {
      tickerCode: 'JEPI',
      stockCode: '',
      expectedPayDate: '2022-09-07',
      exDividendDate: '2022-09-01',
      expectedDividends: 7.27,
      currencyType: 'USD',
    },
  ];
  return (
    <Box>
      <List disablePadding>
        {mockData?.map(
          ({
            tickerCode,
            stockCode,
            expectedPayDate,
            expectedDividends,
            exDividendDate,
          }) => (
            <>
              <ListItem disablePadding sx={{ gap: '9px' }}>
                <ListItemText
                  secondary={`${new Date(expectedPayDate).getDate()}일`}
                  sx={{ maxWidth: 32 }}
                />
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Avatar />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <CommonFont fontWeight="bold" color="gray9">
                      {stockCode || tickerCode}
                    </CommonFont>
                  }
                />
                <ListItemText
                  primary={
                    <CommonFont fontWeight="bold" color="gray7">
                      {expectedDividends}
                    </CommonFont>
                  }
                  secondary={
                    <CommonFont
                      fontSize="caption2"
                      fontWeight="regular"
                      color={'gray6'}
                    >
                      {`${new Date(exDividendDate).getMonth() + 1}월 ${new Date(
                        exDividendDate,
                      ).getDate()}일 예상`}
                      {}
                    </CommonFont>
                  }
                  sx={{ textAlign: 'right' }}
                />
              </ListItem>
            </>
          ),
        )}
      </List>
    </Box>
  );
}

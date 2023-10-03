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

  // const { data } = useMonthlyCalanderDividendQuery();
  // const mockData: DividendCalanderModel[] = [
  //   {
  //     tickerCode: 'JEPI',
  //     stockCode: '',
  //     expectedPayDate: '2022-09-07',
  //     exDividendDate: '2022-09-01',
  //     expectedDividends: 7.27,
  //     currencyType: 'USD',
  //   },
  //   {
  //     tickerCode: 'JEPI',
  //     stockCode: '',
  //     expectedPayDate: '2022-09-07',
  //     exDividendDate: '2022-09-01',
  //     expectedDividends: 7.27,
  //     currencyType: 'USD',
  //   },
  // ];

  if (data?.success === true && !data?.data.length) {
    return (
      <CommonFont
        component="p"
        fontSize="caption2"
        fontWeight="regular"
        color="gray6"
        textAlign="center"
      >
        이번달은 배당을 주는 주식이 없습니다.
      </CommonFont>
    );
  }
  if (data?.success === false) {
    return (
      <CommonFont
        component="p"
        fontSize="caption2"
        fontWeight="regular"
        color="gray6"
        textAlign="center"
      >
        에러가 발생했습니다.
      </CommonFont>
    );
  }

  return (
    <Box>
      <List disablePadding>
        {data?.data.map(
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

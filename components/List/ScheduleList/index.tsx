import { useMonthlyCalanderDividendKRWithSimpleQuery } from '@/hook/useQueryHook/useMonthlyCalanderDividendQuery';
import CommonFont from '@/components/common/Font';

import StockAvatar from '@/components/common/StockAvatar';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

export function ScheduleList() {
  const { data } = useMonthlyCalanderDividendKRWithSimpleQuery();

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
            <div key={tickerCode || stockCode}>
              <ListItem disablePadding sx={{ gap: '9px' }}>
                <ListItemText
                  secondary={`${new Date(expectedPayDate).getDate()}일`}
                  sx={{ maxWidth: 32 }}
                />
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <StockAvatar tickerCode={tickerCode} stockCode={stockCode} />
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
            </div>
          ),
        )}
      </List>
    </Box>
  );
}

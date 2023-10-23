import CommonFont from '@/components/common/Font';

import StockAvatar from '@/components/common/StockAvatar';
import { useMonthlyCalanderDividend } from '@/hook/useMonthlyCalanderDividend';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

export default function MonthlyCalanderDividendList() {
  const { monthlyCalanderDividendSimpleKRData } = useMonthlyCalanderDividend();

  if (
    monthlyCalanderDividendSimpleKRData?.success === true &&
    !monthlyCalanderDividendSimpleKRData?.data.length
  ) {
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
  if (
    monthlyCalanderDividendSimpleKRData?.success !== undefined &&
    monthlyCalanderDividendSimpleKRData?.success === false
  ) {
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
        {monthlyCalanderDividendSimpleKRData?.data.map(
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
                  primary={
                    <CommonFont
                      fontSize="caption"
                      color="gray6"
                      fontWeight="normal"
                    >{`${new Date(expectedPayDate).getDate()}일`}</CommonFont>
                  }
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
                      {`배당락 ${
                        new Date(exDividendDate).getMonth() + 1
                      }월 ${new Date(exDividendDate).getDate()}일 `}
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

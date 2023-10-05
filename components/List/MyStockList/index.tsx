import CommonFont from '@/components/common/Font';
import FlexBox from '@/components/common/FlexBox';
import { useMyPortFolioExchangeQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  styled,
} from '@mui/material';

export function MyStockList() {
  const { data: myPortfolioData } = useMyPortFolioExchangeQuery();
  const myAssetDetails = myPortfolioData?.assetDetails;

  return (
    <Box>
      <StyledMyStockListContainer disablePadding>
        {myAssetDetails?.map((detail) => {
          return (
            <FlexBox key={detail.tickerCode} flexDirection="column">
              <ListItem disablePadding sx={{ gap: '9px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Avatar />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <CommonFont fontWeight="bold">
                      {detail.tickerCode}
                    </CommonFont>
                  }
                  secondary={
                    <CommonFont
                      fontSize="caption"
                      fontWeight="normal"
                      color="gray5"
                    >
                      내 평균 {detail?.averagePrice}
                    </CommonFont>
                  }
                  sx={{ textAlign: 'left' }}
                />
                <ListItemText
                  primary={
                    <CommonFont
                      fontSize="body1"
                      fontWeight="bold"
                      color="gray7"
                    >
                      {detail?.currentPrice}
                    </CommonFont>
                  }
                  secondary={
                    <CommonFont
                      fontSize="caption2"
                      fontWeight="regular"
                      color={
                        detail?.assetPriceChangeRate &&
                        detail?.assetPriceChangeRate > 0
                          ? 'point_red01'
                          : 'point_blue02'
                      }
                    >
                      {detail?.assetPriceChangeRate &&
                      detail?.assetPriceChangeRate > 0
                        ? `+${detail?.assetPriceChangeRate}%`
                        : '0%'}
                    </CommonFont>
                  }
                  sx={{ textAlign: 'right' }}
                />
              </ListItem>

              <FlexBox width="100%" paddingLeft="49px">
                <DetailList>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={
                        <CommonFont fontSize="caption" color="gray6">
                          배당율
                        </CommonFont>
                      }
                    ></DetailListItemText>
                    <DetailListItemText textAlign="right">
                      <CommonFont fontSize="caption" color="gray8">
                        {detail?.dividendPriceRatio > 0
                          ? detail?.dividendPriceRatio.toFixed(2)
                          : detail?.dividendPriceRatio}
                        %
                      </CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={
                        <CommonFont fontSize="caption" color="gray6">
                          배당주기
                        </CommonFont>
                      }
                    ></DetailListItemText>
                    <DetailListItemText textAlign="right">
                      <CommonFont fontSize="caption" color="gray8">
                        {detail.dividendMonth?.length
                          ? detail.dividendMonth.join(',')
                          : '없음'}
                      </CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={
                        <CommonFont fontSize="caption" color="gray6">
                          보유수량
                        </CommonFont>
                      }
                    ></DetailListItemText>
                    <DetailListItemText textAlign="right">
                      <CommonFont fontSize="caption" color="gray8">
                        {detail?.count}
                      </CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={
                        <CommonFont fontSize="caption" color="gray6">
                          자산가치
                        </CommonFont>
                      }
                    ></DetailListItemText>
                    <DetailListItemText
                      textAlign="right"
                      primary={
                        <>
                          <CommonFont fontSize="caption" color="gray8">
                            {detail?.value}{' '}
                          </CommonFont>
                          <CommonFont
                            fontSize="caption"
                            component="span"
                            color={
                              detail?.rateOfReturn && detail?.rateOfReturn > 0
                                ? 'point_red01'
                                : 'point_blue02'
                            }
                          >
                            (
                            {detail?.rateOfReturn && detail.rateOfReturn > 0
                              ? `+${detail.rateOfReturn.toFixed(2)}`
                              : detail.rateOfReturn}
                            %)
                          </CommonFont>
                        </>
                      }
                    ></DetailListItemText>
                  </DetailListItem>
                </DetailList>
              </FlexBox>
            </FlexBox>
          );
        })}
      </StyledMyStockListContainer>
    </Box>
  );
}

const StyledMyStockListContainer = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const DetailList = styled(List)`
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.basic.gray0};
  border-radius: 8px;
  margin-left: (40 + 9 + 16) px;
  width: 100%;
`;

const DetailListItem = styled(ListItem)`
  padding: 0;
`;

type DetailListItemTextProps = {
  textAlign: 'left' | 'right';
};

const DetailListItemText = styled(ListItemText)<DetailListItemTextProps>`
  text-align: ${({ textAlign }) => textAlign};
`;

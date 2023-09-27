import CommonFont from '@/components/common/Font';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { transferPrice } from '@/core/utils/transferPrice';
import FlexBox from '@/components/common/FlexBox';
import { useExchangeRate } from '@/hook/useExchangeRate';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  styled,
} from '@mui/material';

/**
 *
 * TODO: 해당 코드들은 사용될 예정입니다.
 * const titles = ['배당율', '배당주기', '보유수량', '자산가치'];

// interface MyStockItemModel {
//   symbol: string;
//   imgUrl: string;
//   assetPurchasePrice: string;
//   assetTotalPrice: string;
//   assetTotalPriceDiffRate: string;
//   currentAssetPrice?: string;
//   dividendRate?: string;
//   frequency?: 'ONE_TIME';
//   assetCount?: number;
//   diffRate?: string;
// }

// const datas: MyStockItemModel[] = [
//   {
//     symbol: 'JEPI',
//     imgUrl: '💥',
//     assetPurchasePrice: '40105',
//     assetTotalPrice: '40,402',
//     assetTotalPriceDiffRate: '+0.1%',
//   },
//   {
//     symbol: 'SCHD',
//     imgUrl: '💥',
//     assetPurchasePrice: '40105',
//     assetTotalPrice: '100,402',
//     assetTotalPriceDiffRate: '+0.1%',
//   },
// ];

 */

export function MyStockList() {
  const { exchangeRate } = useExchangeRate();
  const { myPortFolioData } = useMyPortFolio();
  const myAssetDetails = myPortFolioData?.assetDetails;

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
                      내 평균{' '}
                      {transferPrice({
                        currentPrice: detail.averagePrice,
                        outputSymbol: 'KRW',
                        exchangeRate,
                        defaultText: '0원',
                      })}
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
                      {transferPrice({
                        currentPrice: detail.currentPrice,
                        outputSymbol: 'KRW',
                        exchangeRate,
                        defaultText: '0원',
                      })}
                    </CommonFont>
                  }
                  secondary={
                    <CommonFont
                      fontSize="caption2"
                      fontWeight="regular"
                      color={
                        detail.assetPriceChangeRate &&
                        detail.assetPriceChangeRate > 0
                          ? 'point_red01'
                          : 'point_blue02'
                      }
                    >
                      {detail.assetPriceChangeRate &&
                      detail.assetPriceChangeRate > 0
                        ? `+${detail.assetPriceChangeRate}%`
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
                        {detail.dividendPriceRatio > 0
                          ? detail.dividendPriceRatio.toFixed(7)
                          : detail.dividendPriceRatio}
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
                        {detail.dividendMonth.length
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
                        {detail.count}
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
                            {transferPrice({
                              currentPrice: detail.value,
                              exchangeRate,
                              outputSymbol: 'KRW',
                              defaultText: '',
                            })}{' '}
                          </CommonFont>
                          <CommonFont
                            fontSize="caption"
                            component="span"
                            color={
                              detail.rateOfReturn && detail.rateOfReturn > 0
                                ? 'point_red01'
                                : 'point_blue02'
                            }
                          >
                            ({detail.rateOfReturn.toFixed(2) || 0}%)
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

        {/** TODO: 해당 코드들은 사용될 예정입니다.
         *
         *  {/* {datas.map(
          ({
            symbol,
            assetPurchasePrice,
            assetTotalPrice,
            assetTotalPriceDiffRate,
          }) => (
            <FlexBox key={symbol} flexDirection="column">
              {
                // TODO: 데이터와 연동하면서 리팩토링 진행
              }
              <ListItem disablePadding sx={{ gap: '9px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Avatar />
                </ListItemIcon>
                <ListItemText
                  primary={<CommonFont fontWeight="bold">{symbol}</CommonFont>}
                  secondary={
                    <CommonFont
                      fontSize="caption"
                      fontWeight="normal"
                      color="gray5"
                    >
                      내 평균 ${assetPurchasePrice}원
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
                      {assetTotalPrice}원
                    </CommonFont>
                  }
                  secondary={
                    <CommonFont
                      fontSize="caption2"
                      fontWeight="regular"
                      color="point_red01"
                    >
                      {assetTotalPriceDiffRate}
                    </CommonFont>
                  }
                  sx={{ textAlign: 'right' }}
                />
              </ListItem>

              {
                // TODO: 데이터와 연동하면서 리팩토링 진행
              }
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
                        11.05%
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
                        월배당
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
                        53,000
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
                            2억 3521만원
                          </CommonFont>
                          <CommonFont
                            fontSize="caption"
                            component="span"
                            color="point_red01"
                          >
                            (+10.1%)
                          </CommonFont>
                        </>
                      }
                    ></DetailListItemText>
                  </DetailListItem>
                </DetailList>
              </FlexBox>
            </FlexBox>
          ),
        )} */}
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

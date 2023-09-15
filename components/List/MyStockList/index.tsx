import CommonFont from '@/components/Font';
import FlexBox from '@/components/common/FlexBox';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  styled,
} from '@mui/material';

// const titles = ['배당율', '배당주기', '보유수량', '자산가치'];
// const mockAssetDetails: MyPortfolioAssetDetailModel[] = [
//   {
//     assetId: 0,
//     tickerCode: 'apple2',
//     stockCode: 'apple',
//     count: 0,
//     averagePrice: '10101010',
//     currentPrice: '10101111',
//     assetPriceChangeRate: '300',
//     assetPriceChange: '200',
//     value: 0,
//     rateOfReturn: 0,
//     dividendYield: 0,
//     dividendMonth: [],
//   },
//   {
//     assetId: 0,
//     tickerCode: 'apple',
//     stockCode: 'apple',
//     count: 0,
//     averagePrice: '10101010',
//     currentPrice: '10101111',
//     assetPriceChangeRate: '300',
//     assetPriceChange: '200',
//     value: 0,
//     rateOfReturn: 0,
//     dividendYield: 0,
//     dividendMonth: [],
//   },
// ];

// type MyPortfolioAssetDetailModel = {
//   assetId: number;
//   tickerCode: string;
//   stockCode: string;
//   count: number;
//   averagePrice: string;
//   currentPrice: string;
//   assetPriceChangeRate: string;
//   assetPriceChange: string;
//   value: number;
//   rateOfReturn: number;
//   dividendYield: number;
//   dividendMonth: number[];
// };

interface MyStockItemModel {
  symbol: string;
  imgUrl: string;
  assetPurchasePrice: string;
  assetTotalPrice: string;
  assetTotalPriceDiffRate: string;
  currentAssetPrice?: string;
  dividendRate?: string;
  frequency?: 'ONE_TIME';
  assetCount?: number;
  diffRate?: string;
}

const datas: MyStockItemModel[] = [
  {
    symbol: 'JEPI',
    imgUrl: '💥',
    assetPurchasePrice: '40105',
    assetTotalPrice: '40,402',
    assetTotalPriceDiffRate: '+0.1%',
  },
  {
    symbol: 'SCHD',
    imgUrl: '💥',
    assetPurchasePrice: '40105',
    assetTotalPrice: '100,402',
    assetTotalPriceDiffRate: '+0.1%',
  },
];

export function MyStockList() {
  // data를 받아오고 그 데이터를 뿌려주는 역할만한다. hook

  return (
    <Box>
      <StyledMyStockListContainer
        disablePadding
        // sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
      >
        {datas.map(
          ({
            symbol,
            // imgUrl,
            assetPurchasePrice,
            assetTotalPrice,
            assetTotalPriceDiffRate,
          }) => (
            <FlexBox key={symbol} flexDirection="column">
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: 0, gap: '9px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <CommonFont fontWeight="bold">{symbol}</CommonFont>
                    }
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
                </ListItemButton>
              </ListItem>

              <FlexBox width="100%" paddingLeft="49px">
                <DetailList>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={<CommonFont>배당율</CommonFont>}
                    ></DetailListItemText>
                    <DetailListItemText textAlign="right">
                      <CommonFont>11.05%</CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={<CommonFont>배당주기</CommonFont>}
                    ></DetailListItemText>
                    <DetailListItemText textAlign="right">
                      <CommonFont>월배당</CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListItemText
                      textAlign="left"
                      primary={<CommonFont>보유수량</CommonFont>}
                    ></DetailListItemText>
                    <DetailListItemText textAlign="right">
                      <CommonFont>53,000</CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListItemText textAlign="left">
                      자산가치
                    </DetailListItemText>
                    <DetailListItemText textAlign="right">
                      2억 3521만원
                      <CommonFont
                        component="span"
                        fontSize="body1"
                        color="point_red01"
                      >
                        (+10.1%)
                      </CommonFont>
                    </DetailListItemText>
                  </DetailListItem>
                </DetailList>
              </FlexBox>
            </FlexBox>
          ),
        )}
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

const DetailListItemText = styled(ListItemText)<{
  textAlign: 'left' | 'right';
}>`
  text-align: ${({ textAlign }) => textAlign};
`;

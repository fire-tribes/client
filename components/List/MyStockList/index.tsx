import NotifyPopup from '@/components/Popup/NotifyPopup';
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
      <List disablePadding>
        {datas.map(
          ({
            symbol,
            // imgUrl,
            assetPurchasePrice,
            assetTotalPrice,
            assetTotalPriceDiffRate,
          }) => (
            <NotifyPopup key={symbol}>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: 0, gap: '9px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight={700}>{symbol}</Typography>}
                    secondary={`내 평균 ${assetPurchasePrice}원`}
                    sx={{ textAlign: 'left' }}
                  />

                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        {assetTotalPrice}원
                      </Typography>
                    }
                    secondary={
                      <Typography color="error">
                        {assetTotalPriceDiffRate}
                      </Typography>
                    }
                    sx={{ textAlign: 'right' }}
                    color={'error'}
                  />
                </ListItemButton>
              </ListItem>
            </NotifyPopup>
          ),
        )}
      </List>
    </Box>
  );
}

import { useEmotionTheme } from '@/hook/useThemeHooks';
import { Avatar } from '@mui/material';

interface StockAvatarProps {
  tickerCode: string;
  stockCode: string;
}

export default function StockAvatar({
  tickerCode = '',
  stockCode = '',
}: StockAvatarProps) {
  const { palette } = useEmotionTheme();
  return (
    <Avatar
      sx={{
        color: palette.basic.point_blue01,
        backgroundColor: palette.basic.gray3,
      }}
    >
      {tickerCode.trim()[0] || stockCode.trim()[0]}
    </Avatar>
  );
}

import { useEmotionTheme } from '@/hook/useThemeHooks';
import { Avatar } from '@mui/material';

interface StockAvatarProps {
  primary: string | undefined;
  secondary?: string;
}

export default function StockAvatar({ primary, secondary }: StockAvatarProps) {
  const { palette } = useEmotionTheme();

  console.log('primary: ', primary);
  console.log('primary?.trim()[0]: ', primary?.trim()[0]);

  return (
    <Avatar
      sx={{
        color: palette.basic.point_blue01,
        backgroundColor: palette.basic.gray3,
      }}
    >
      {primary?.trim()[0] || secondary?.trim()[0]}
    </Avatar>
  );
}

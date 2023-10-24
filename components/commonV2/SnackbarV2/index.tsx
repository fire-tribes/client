import { StyledSnackbar } from '@/components/commonV2/SnackbarV2/style';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';

export default function SnackbarV2() {
  const { snackbarState } = useControlSnackbarV2();
  const vertical = snackbarState.anchorOrigin?.vertical;

  /**
   * TODO: 위에서 나타나는 toast를 사용할 떄 해당 px 값을 변경
   * 72px 말고 다른 값을 넣고 싶다면 openSnackbar 함수에서 sx로 넣어주면 됩니다.
   */

  const top = vertical === 'top' ? '72px' : undefined;
  const bottom = vertical === 'bottom' ? '72px' : undefined;

  return (
    <StyledSnackbar
      sx={{
        position: 'absolute',
        top,
        bottom,
      }}
      ContentProps={{
        sx: {
          justifyContent: 'center',
        },
      }}
      mediaStyleProps={{
        top,
        bottom,
      }}
      {...snackbarState}
    />
  );
}

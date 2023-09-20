import { badangDetailText, items } from '@/mocks';
import FlexBox from '@/components/common/FlexBox';
import NotifyListModal from '@/components/common/Modal/NotifyListModal';
import CommonIcon from '@/components/common/Icon';
import { S } from '@/components/List/DetailInformationList/styles';
import CommonFont from '@/components/Font';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { ListItem, ListItemButton } from '@mui/material';
import type { BadgeDetailText, DetailInformationKeys } from '@/mocks';

export default function DetailInformationList() {
  // useHooks get data
  const { data } = useAnnualDividend();
  const responseData = data?.data.data;

  const detailInformationData = {
    annualDividend: responseData?.annualDividend,
    dividendPriceRatio: responseData?.dividendPriceRatio,
    unPaidTax: responseData?.unPaidTax,
    paidTax: responseData?.paidTax,
  };

  const texts = Object.entries(badangDetailText) as [
    DetailInformationKeys,
    BadgeDetailText,
  ][];

  const paddingTop = '9px';
  const paddingBottom = '9px';

  return (
    <>
      {texts.map(([key, value]) => {
        if (value.shouldOpenModal) {
          return (
            <NotifyListModal
              key={key}
              modalTitle={value.title}
              items={items[key]}
            >
              <ListItemButton sx={{ padding: 0 }}>
                <ListItem key={key} disablePadding sx={{ display: 'block' }}>
                  <FlexBox
                    justifyContent="space-between"
                    alignItems="center"
                    paddingTop={paddingTop}
                    paddingBottom={paddingBottom}
                  >
                    <S.Title>
                      <FlexBox alignItems="center" gap="4px">
                        <CommonFont fontSize="body1">{value.title}</CommonFont>
                        {value.iconName && (
                          <CommonIcon
                            iconName={value.iconName}
                            width={12}
                            height={12}
                          />
                        )}
                      </FlexBox>
                    </S.Title>
                    <S.Content>
                      <CommonFont
                        color={value.color}
                        fontSize="body1"
                        fontWeight="bold"
                      >
                        {detailInformationData[key]
                          ? detailInformationData[key]
                          : value.defaultValue}
                      </CommonFont>
                    </S.Content>
                  </FlexBox>
                </ListItem>
              </ListItemButton>
            </NotifyListModal>
          );
        }

        return (
          <ListItem key={key} disablePadding sx={{ display: 'block' }}>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              paddingTop={paddingTop}
              paddingBottom={paddingBottom}
            >
              <S.Title>
                <FlexBox alignItems="center" gap="4px">
                  <CommonFont fontSize="body1">{value.title}</CommonFont>
                  {value.iconName && (
                    <CommonIcon
                      iconName={value.iconName}
                      width={12}
                      height={12}
                    />
                  )}
                </FlexBox>
              </S.Title>
              <S.Content>
                <CommonFont
                  color={value.color}
                  fontSize="body1"
                  fontWeight="bold"
                >
                  {detailInformationData[key]
                    ? detailInformationData[key]
                    : value.defaultValue}
                </CommonFont>
              </S.Content>
            </FlexBox>
          </ListItem>
        );
      })}
    </>
  );
}

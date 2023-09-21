import { badangDetailText, items } from '@/mocks';
import FlexBox from '@/components/common/FlexBox';
import NotifyListModal from '@/components/common/Modal/NotifyListModal';
import CommonIcon from '@/components/common/Icon';
import { S } from '@/components/List/DetailInformationList/styles';
import CommonFont from '@/components/common/Font';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { useExchageRate } from '@/hook/useExchageRate';
import { transferPrice } from '@/core/utils/transferPrice';
import { ListItem, ListItemButton } from '@mui/material';
import type { BadgeDetailText, DetailInformationKeys } from '@/mocks';

export default function DetailInformationList() {
  // useHooks get data
  const { annualDividendData } = useAnnualDividend();
  const { exchangeRate } = useExchageRate();

  transferPrice({
    exchangeRate,
    currentPrice: annualDividendData?.annualDividend,
    outputSymbol: 'KRW',
  });

  transferPrice({
    exchangeRate,
    currentPrice: annualDividendData?.paidTax,
    outputSymbol: 'KRW',
  });

  transferPrice({
    exchangeRate,
    currentPrice: annualDividendData?.unPaidTax,
    outputSymbol: 'KRW',
  });

  const detailInformationData = {
    annualDividend: `${transferPrice({
      exchangeRate,
      currentPrice: annualDividendData?.annualDividend,
      outputSymbol: 'KRW',
      defaultText: '0원',
    })}`,
    dividendPriceRatio: annualDividendData?.dividendPriceRatio || '0%',
    paidTax: `${transferPrice({
      exchangeRate,
      currentPrice: annualDividendData?.paidTax,
      outputSymbol: 'KRW',
      defaultText: '없음',
    })}`,
    unPaidTax: `${transferPrice({
      exchangeRate,
      currentPrice: annualDividendData?.unPaidTax,
      outputSymbol: 'KRW',
      optionText: ' 예상',
      defaultText: '없음',
    })}`,
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
                        {detailInformationData[key]}
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
                  {detailInformationData[key]}
                </CommonFont>
              </S.Content>
            </FlexBox>
          </ListItem>
        );
      })}
    </>
  );
}

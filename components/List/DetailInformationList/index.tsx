import CommonIcon from '@/components/common/Icon';
import CommonFont from '@/components/common/Font';
import { AnnualDividendListItem } from '@/components/List/DetailInformationList/AnnualDividendListItem';
// import { useAnnualDividend } from '@/hook/useAnnualDividend';

import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { transferPrice } from '@/core/utils/transferPrice';
import { useExchangeRate } from '@/hook/useExchangeRate';
import type { BadgeDetailText } from '@/mocks';

export const badangDetailText = {
  annualDividend: {
    shouldOpenModal: false,
    title: '연간 총 배당금',
    color: 'gray9',
    iconName: '',
  },
  dividendPriceRatio: {
    shouldOpenModal: true,
    title: '투자 배당률',
    color: 'point_red01',
    iconName: 'expand_more',
  },
  paidTax: {
    shouldOpenModal: true,
    title: '납부한 세금',
    color: 'point_blue02',
    iconName: 'expand_more',
  },
  unPaidTax: {
    shouldOpenModal: true,
    title: '납부할 세금',
    color: 'point_blue02',
    iconName: 'expand_more',
  },
};

export default function DetailInformationList() {
  const { annualDividendData } = useAnnualDividend();
  const { exchangeRate } = useExchangeRate();

  // const { data } = useAnnualDividendExchangeQuery();
  // const { annualDividendData } = useAnnualDividend();

  const detailInformationData = {
    annualDividend: `${transferPrice({
      exchangeRate,
      currentPrice: annualDividendData?.annualDividend,
      outputSymbol: 'KRW',
      defaultText: '0원',
    })}`,
    dividendPriceRatio: `${
      annualDividendData?.dividendPriceRatio.toFixed(2) || 0
    }%`,
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
  // const detailInformationData = {
  //   annualDividend: data?.annualDividend,
  //   dividendPriceRatio: data?.dividendPriceRatio,
  //   paidTax: data?.paidTax,
  //   unPaidTax: data?.unPaidTax,
  // };

  const annualDividendListItemTexts = Object.entries(badangDetailText) as [
    keyof typeof detailInformationData,
    BadgeDetailText,
  ][];

  const paddingTop = '9px';
  const paddingBottom = '9px';

  return (
    <>
      {annualDividendListItemTexts.map(([key, value]) => (
        <AnnualDividendListItem
          key={key}
          padding={{
            top: paddingTop,
            bottom: paddingBottom,
          }}
          title={value.title}
          icon={
            value.iconName && (
              <CommonIcon iconName={value.iconName} width={12} height={12} />
            )
          }
          content={
            <CommonFont color={value.color} fontSize="body1" fontWeight="bold">
              {detailInformationData[key]}
            </CommonFont>
          }
        />
      ))}
    </>
  );

  // return (
  //   <>
  //     {texts.map(([key, value]) => {
  //       if (value.shouldOpenModal) {
  //         return (
  //           <NotifyListModal
  //             key={key}
  //             modalTitle={value.title}
  //             items={modalItems}
  //           >
  //             <ListItemButton sx={{ padding: 0 }}>
  //               <ListItem key={key} disablePadding sx={{ display: 'block' }}>
  //                 <FlexBox
  //                   justifyContent="space-between"
  //                   alignItems="center"
  //                   paddingTop={paddingTop}
  //                   paddingBottom={paddingBottom}
  //                 >
  //                   <S.Title>
  //                     <FlexBox alignItems="center" gap="4px">
  //                       <CommonFont fontSize="body1">{value.title}</CommonFont>
  //                       {value.iconName && (
  //                         <CommonIcon
  //                           iconName={value.iconName}
  //                           width={12}
  //                           height={12}
  //                         />
  //                       )}
  //                     </FlexBox>
  //                   </S.Title>
  //                   <S.Content>
  //                     <CommonFont
  //                       color={value.color}
  //                       fontSize="body1"
  //                       fontWeight="bold"
  //                     >
  //                       {detailInformationData[key]}
  //                     </CommonFont>
  //                   </S.Content>
  //                 </FlexBox>
  //               </ListItem>
  //             </ListItemButton>
  //           </NotifyListModal>
  //         );
  //       }

  //       return (
  //         <ListItem key={key} disablePadding sx={{ display: 'block' }}>
  //           <FlexBox
  //             justifyContent="space-between"
  //             alignItems="center"
  //             paddingTop={paddingTop}
  //             paddingBottom={paddingBottom}
  //           >
  //             <S.Title>
  //               <FlexBox alignItems="center" gap="4px">
  //                 <CommonFont fontSize="body1">{value.title}</CommonFont>
  //                 {value.iconName && (
  //                   <CommonIcon
  //                     iconName={value.iconName}
  //                     width={12}
  //                     height={12}
  //                   />
  //                 )}
  //               </FlexBox>
  //             </S.Title>
  //             <S.Content>
  //               <CommonFont
  //                 color={value.color}
  //                 fontSize="body1"
  //                 fontWeight="bold"
  //               >
  //                 {detailInformationData[key]}
  //               </CommonFont>
  //             </S.Content>
  //           </FlexBox>
  //         </ListItem>
  //       );
  //     })}
  //   </>
  // );
}

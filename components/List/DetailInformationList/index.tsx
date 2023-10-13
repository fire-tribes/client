import CommonIcon from '@/components/common/Icon';
import CommonFont from '@/components/common/Font';
import { AnnualDividendListItem } from '@/components/List/DetailInformationList/AnnualDividendListItem';

import { useAnnualDividend } from '@/hook/useAnnualDividend';

import AnnualDividendModal from '@/components/common/Modal/AnnualDividendModal';
import type { BadgeDetailText } from '@/mocks';

export default function DetailInformationList() {
  const {
    // annualDividendSimpleKRData,
    annualDividendTaxKRData,
    annualDividendSimpleKRData,
  } = useAnnualDividend();

  const detailInformationData = {
    annualDividend: `${annualDividendSimpleKRData?.annualDividend || 0}`,
    dividendPriceRatio: `${
      annualDividendSimpleKRData?.dividendPriceRatio.toFixed(2) || 0
    }%`,
    paidTax: annualDividendSimpleKRData?.paidTax
      ? `${annualDividendSimpleKRData?.paidTax}`
      : '없음',
    unPaidTax: annualDividendSimpleKRData?.unPaidTax
      ? `${annualDividendSimpleKRData?.unPaidTax} 예상`
      : '없음',
  };

  const today = new Date();
  const thisYeaderFirstDay = new Date(today.getFullYear(), 1, 1);

  const badangDetailText: Record<
    'annualDividend' | 'dividendPriceRatio' | 'paidTax' | 'unPaidTax',
    BadgeDetailText
  > = {
    annualDividend: {
      shouldOpenModal: false,
      title: '연간 총 배당금',
      color: 'gray9',
      iconName: '',
      items: [],
    },
    dividendPriceRatio: {
      shouldOpenModal: true,
      title: '배당 수익률',
      color: 'point_red01',
      iconName: 'expand_more',
      items: [
        {
          title: (
            <CommonFont fontSize="body1" fontWeight="normal">
              투자 배당률
            </CommonFont>
          ),
          subTitle: (
            <CommonFont fontSize="body3" fontWeight="regular" color="gray6">
              주식을 산 시점의 가격을 반영한 배당율
            </CommonFont>
          ),
          value: (
            <CommonFont fontSize="body1" fontWeight="bold" color="point_red01">
              {annualDividendSimpleKRData?.dividendPriceRatio}%
            </CommonFont>
          ),
        },
        {
          title: (
            <CommonFont fontSize="body1" fontWeight="normal">
              시가 배당률
            </CommonFont>
          ),
          subTitle: (
            <CommonFont fontSize="body3" fontWeight="regular" color="gray6">
              현재 변동한 주식 가격을 반영한 배당율
            </CommonFont>
          ),
          value: (
            <CommonFont fontSize="body1" fontWeight="bold" color="point_red01">
              {annualDividendSimpleKRData?.dividendYieldRatio}%
            </CommonFont>
          ),
        },
      ],
    },
    paidTax: {
      shouldOpenModal: true,
      title: '납부한 세금',
      color: 'point_blue02',
      iconName: 'expand_more',
      items: [
        {
          title: (
            <CommonFont fontSize="body1" fontWeight="normal">
              배당소득세 (15%)
            </CommonFont>
          ),
          subTitle: (
            <CommonFont fontSize="body3" fontWeight="regular" color="gray6">
              {`${thisYeaderFirstDay.getFullYear()}년 1월 ~ 현재`}
            </CommonFont>
          ),
          value: (
            <CommonFont fontSize="body1" fontWeight="bold" color="point_blue02">
              {annualDividendTaxKRData?.paidTax}
            </CommonFont>
          ),
        },
        {
          title: (
            <CommonFont fontSize="body1" fontWeight="normal">
              4대보험
            </CommonFont>
          ),
          subTitle: '',
          value: (
            <CommonFont fontSize="body1" fontWeight="bold" color="point_blue02">
              준비 중
            </CommonFont>
          ),
        },
      ],
    },
    unPaidTax: {
      shouldOpenModal: true,
      title: '납부할 세금',
      color: 'point_blue02',
      iconName: 'expand_more',
      items: [
        {
          title: (
            <CommonFont fontSize="body1" fontWeight="normal">
              배당소득세 (15%)
            </CommonFont>
          ),
          subTitle: (
            <CommonFont fontSize="body3" fontWeight="regular" color="gray6">
              {`${thisYeaderFirstDay.getFullYear()}년 1월 ~ 현재`}
            </CommonFont>
          ),
          value: (
            <CommonFont fontSize="body1" fontWeight="bold" color="point_blue02">
              {annualDividendTaxKRData?.unPaidTax} 예상
            </CommonFont>
          ),
        },
        {
          title: (
            <CommonFont fontSize="body1" fontWeight="normal">
              4대보험
            </CommonFont>
          ),
          subTitle: '',
          value: (
            <CommonFont fontSize="body1" fontWeight="bold" color="point_blue02">
              준비 중
            </CommonFont>
          ),
        },
      ],
    },
  };

  const annualDividendListItemTexts = Object.entries(badangDetailText) as [
    keyof typeof detailInformationData,
    BadgeDetailText,
  ][];

  const paddingTop = '9px';
  const paddingBottom = '9px';

  return (
    <>
      {annualDividendListItemTexts.map(([key, value]) => (
        <AnnualDividendModal
          key={key}
          modalTitle={value.title}
          items={value.items}
        >
          <AnnualDividendListItem
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
              <CommonFont
                color={value.color}
                fontSize="body1"
                fontWeight="bold"
              >
                {detailInformationData[key]}
              </CommonFont>
            }
          />
        </AnnualDividendModal>
      ))}
    </>
  );
}

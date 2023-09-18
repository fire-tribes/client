import CommonFont from '@/components/Font';
import type { NotifyListItemProps } from '@/components/common/Modal/NotifyListModal';

export const mockNotifyModalItemModel: NotifyListItemProps[] = [
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
        6.9%
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
        6.7%
      </CommonFont>
    ),
  },
];

export const mockNotifyModalItemModel2: NotifyListItemProps[] = [
  {
    title: (
      <CommonFont fontSize="body1" fontWeight="normal">
        배당소득세 (15%)
      </CommonFont>
    ),
    subTitle: (
      <CommonFont fontSize="body3" fontWeight="regular" color="gray6">
        2023년 1월 ~ 현재
      </CommonFont>
    ),
    value: (
      <CommonFont fontSize="body1" fontWeight="bold" color="point_blue02">
        853,402원
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
];

const ItemModelKR = {
  annualDividend: [],
  dividendPriceRatio: mockNotifyModalItemModel,
  unPaidTax: mockNotifyModalItemModel2,
  paidPax: mockNotifyModalItemModel2,
};

type ItemModeKRKeys = keyof typeof ItemModelKR;

export { type ItemModeKRKeys, ItemModelKR };

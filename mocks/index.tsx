import { badangDetailText } from '@/components/List/DetailInformationList';
import CommonFont from '@/components/common/Font';
import type { NotifyListItemProps } from '@/components/common/Modal/NotifyListModal';
import type { BasicColorKeys } from '@/styles/palette';

type BadgeDetailText = {
  shouldOpenModal: boolean;
  title: string;
  color: BasicColorKeys;
  iconName: string;
  defaultValue: string;
};
type DetailInformationKeys = keyof typeof badangDetailText;

const items: Record<DetailInformationKeys, NotifyListItemProps[] | []> = {
  annualDividend: [],
  dividendPriceRatio: [
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
  ],
  paidTax: [
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
  ],
  unPaidTax: [
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
  ],
};

export { type BadgeDetailText, type DetailInformationKeys, items };

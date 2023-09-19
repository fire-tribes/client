import CommonFont from '@/components/Font';
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

const badangDetailText = {
  annualDividend: {
    shouldOpenModal: false,
    title: '연간 총 배당금',
    color: 'gray9',
    iconName: '',
    defaultValue: '0원',
  },
  dividendPriceRatio: {
    shouldOpenModal: true,
    title: '배당수익률',
    color: 'point_red01',
    iconName: 'expand_more',
    defaultValue: '0%',
  },
  paidTax: {
    shouldOpenModal: true,
    title: '납부한 세금',
    color: 'point_blue02',
    iconName: 'expand_more',
    defaultValue: '없음',
  },
  unPaidTax: {
    shouldOpenModal: true,
    title: '납부할 세금',
    color: 'point_blue02',
    iconName: 'expand_more',
    defaultValue: '없음',
  },
};

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

export {
  type BadgeDetailText,
  type DetailInformationKeys,
  badangDetailText,
  items,
};

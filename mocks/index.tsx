import type { NotifyListItemProps } from '@/components/common/Modal/AnnualDividendModal';
import type { BasicColorKeys } from '@/styles/palette';

type BadgeDetailText = {
  shouldOpenModal: boolean;
  title: string;
  color: BasicColorKeys;
  iconName: string;
  items: NotifyListItemProps[] | [];
};

export { type BadgeDetailText };

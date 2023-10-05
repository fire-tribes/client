import type { NotifyListItemProps } from '@/components/common/Modal/NotifyListModal';
import type { BasicColorKeys } from '@/styles/palette';

type BadgeDetailText = {
  shouldOpenModal: boolean;
  title: string;
  color: BasicColorKeys;
  iconName: string;
  items: NotifyListItemProps[] | [];
};
const test = 'test';

export { type BadgeDetailText, test };

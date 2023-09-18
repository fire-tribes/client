import { ItemModelKR } from '@/mocks';
import FlexBox from '@/components/common/FlexBox';
import NotifyListModal from '@/components/common/Modal/NotifyListModal';
import CommonIcon from '@/components/common/Icon';
import { S } from '@/components/List/DetailInformationList/styles';
import CommonFont from '@/components/Font';
import { ListItem, ListItemButton } from '@mui/material';
import type { BasicColorKeys } from '@/styles/palette';

type badgeDetailText = {
  key: keyof typeof ItemModelKR;
  title: string;
  content: string;
  color: BasicColorKeys;
  iconName: string;
};

const badangDetailTexts: badgeDetailText[] = [
  {
    key: 'annualDividend',
    title: '연간 총 배당금',
    content: '8810만원',
    color: 'gray9',
    iconName: '',
  },
  {
    key: 'dividendPriceRatio',
    title: '배당수익률',
    content: '6.9%',
    color: 'point_red01',
    iconName: 'expand_more',
  },
  {
    key: 'paidPax',
    title: '납부한 세금',
    content: '104만원',
    color: 'point_blue02',
    iconName: 'expand_more',
  },
  {
    key: 'unPaidTax',
    title: '납부할 세금',
    content: '49만원 예상',
    color: 'point_blue02',
    iconName: 'expand_more',
  },
];

export default function DetailInformationList() {
  // useHooks get data

  return (
    <>
      {badangDetailTexts.map(({ key, title, content, color, iconName }) => {
        const paddingTop = '9px';
        const paddingBottom = '9px';

        const items = ItemModelKR[key];
        const shouldOpenModal = items.length > 0;

        if (shouldOpenModal) {
          return (
            <NotifyListModal
              key={title}
              modalTitle={title}
              items={ItemModelKR[key]}
            >
              <ListItemButton sx={{ padding: 0 }}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <FlexBox
                    justifyContent="space-between"
                    alignItems="center"
                    paddingTop={paddingTop}
                    paddingBottom={paddingBottom}
                  >
                    <S.Title>
                      <FlexBox alignItems="center" gap="4px">
                        <CommonFont fontSize="body1">{title}</CommonFont>
                        {iconName && (
                          <CommonIcon
                            iconName={iconName}
                            width={12}
                            height={12}
                          />
                        )}
                      </FlexBox>
                    </S.Title>
                    <S.Content>
                      <CommonFont
                        color={color}
                        fontSize="body1"
                        fontWeight="bold"
                      >
                        {content}
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
                  <CommonFont fontSize="body1">{title}</CommonFont>
                  {iconName && (
                    <CommonIcon iconName={iconName} width={12} height={12} />
                  )}
                </FlexBox>
              </S.Title>
              <S.Content>
                <CommonFont color={color} fontSize="body1" fontWeight="bold">
                  {content}
                </CommonFont>
              </S.Content>
            </FlexBox>
          </ListItem>
        );
      })}
    </>
  );
}

import { S } from '@/components/List/DetailInformationList/styles';
import FlexBox from '@/components/common/FlexBox';
import CommonFont from '@/components/common/Font';
import { ListItem, ListItemButton } from '@mui/material';
import type { ReactNode } from 'react';

type AnnualDividendListItemProps = {
  padding: {
    top: `${number}px`;
    bottom: `${number}px`;
  };
  title: ReactNode;
  icon: ReactNode;
  content: ReactNode;
};

export const AnnualDividendListItem = ({
  padding,
  title,
  icon,
  content,
}: AnnualDividendListItemProps) => {
  const renderDividendListItem = () => (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        paddingTop={padding.top}
        paddingBottom={padding.bottom}
      >
        <S.Title>
          <FlexBox alignItems="center" gap="4px">
            <CommonFont fontSize="body1">{title}</CommonFont>
            {icon}
          </FlexBox>
        </S.Title>
        <S.Content>
          <CommonFont fontSize="body1" fontWeight="bold">
            {content}
          </CommonFont>
        </S.Content>
      </FlexBox>
    </ListItem>
  );

  const DividendListItem = renderDividendListItem();

  if (icon) {
    return (
      <ListItemButton sx={{ padding: 0 }}>{DividendListItem}</ListItemButton>
    );
  }

  return <>{DividendListItem}</>;
};

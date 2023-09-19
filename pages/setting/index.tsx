import CommonIcon from '@/components/common/Icon';
import Layout from '@/components/common/Layout';
import { StyledHeader, StyledTitle } from '@/pages/setting/styles';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export default function SettingPage() {
  return (
    <Layout>
      <StyledHeader>
        <StyledTitle>계산</StyledTitle>
      </StyledHeader>
      <List>
        <ListItem>
          <ListItemText></ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
            <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
              <CommonIcon iconName="note" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="이용약관" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
            <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
              <CommonIcon iconName="lock" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="개인정보처리방침" />
          </ListItemButton>
        </ListItem>
      </List>
    </Layout>
  );
}

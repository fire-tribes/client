import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

interface CommonListProps {
  items: any[];
}

export default function CommonList({ items }: CommonListProps) {
  console.log(items);
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

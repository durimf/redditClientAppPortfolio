import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Avatar, ListItemAvatar } from '@mui/material';

export default function NestedList() {
 const [open, setOpen] = React.useState(true);

 const handleClick = () => {
  setOpen(!open);
 };

 return (
  <List
   sx={{ width: '100%',bgcolor: 'background.paper' }}
   component="nav"
   aria-labelledby="nested-list-subheader"
  
  >
   <ListItemButton>
    <ListItemAvatar>
     <Avatar alt="Remy Sharp" src="https://i.redd.it/snoovatar/snoo_assets/runways/btkxKjAuh74_avatar_87581996.jpg" />
    </ListItemAvatar>
    <ListItemText primary="Subreddit 1" />
   </ListItemButton>
   <ListItemButton>
    <ListItemAvatar>
     <Avatar alt="Remy Sharp" src="https://i.redd.it/snoovatar/snoo_assets/runways/iczyqZkN-lA_Asset_173_552x_RightFacing.png" />
    </ListItemAvatar>
    <ListItemText primary="Subreddit 2" />
   </ListItemButton>
  </List>
 );
}

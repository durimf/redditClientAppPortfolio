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
import { Avatar, Card, CardContent, ListItemAvatar, CardHeader } from '@mui/material';
import { useGetPostsQuery } from '../api/apiSlice';
import { Link } from 'react-router-dom';

export default function SubredditList() {
 const [open, setOpen] = React.useState(true);


  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = posts.data.children.map((post,id) => {
      return (
        
          <ListItemButton key={id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={post.data.url} />
            </ListItemAvatar>
          <Link to={`subreddit/${post.data.subreddit}`}>
          <ListItemText primary={post.data.subreddit} />
            </Link>
          </ListItemButton>
        
      )
    })
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
 return (
  <Card sx={{ my: 10, }} >
   <CardHeader

    title="Post Title"

    />
    <CardContent>
  <List
   sx={{ width: '100%',bgcolor: 'background.paper' }}
   component="nav"
   aria-labelledby="nested-list-subheader"
  
  >
         {content}
  </List>
  </CardContent >
  </Card>
 );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { postCreationTimeFormatter } from '../assets/Functions';

const bull = (
 <Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
 >
  •
 </Box>
);

export default function CommentCard({isFetching,author,creationTime,comment}) {
 return (
  
  <Card  sx={{
   boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;',
   minWidth: 275,
   backgroundColor: grey[50],
   '&:hover': {
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    borderRadius: 1,
   },
   mb: 3,
  }}
  >
   <CardContent sx={{
    
   }}>
    <Box sx={{
     display: 'flex',
     justifyContent: 'space-between',
     mb: 5,
    }}>
     <Typography sx={{ fontSize: 20 }} color="secondary" gutterBottom>
      {isFetching ? <Skeleton variant="rounded" width={500} height={50} /> : author}
     </Typography>
     <Typography sx={{
      fontSize: 12,
      color: grey[600]
     }} component="div">
      {isFetching ? <Skeleton variant="rounded" width={500} height={50} /> : postCreationTimeFormatter(creationTime)}
     </Typography>
    </Box>
    <Typography sx={{
     fontSize: 15,
     color: grey[600]
    }} component="div">
     {
      isFetching ? <Skeleton variant="rounded" width={500} height={200} />
      :
      comment
     }
    </Typography>
   </CardContent>
  </Card>
 );
}

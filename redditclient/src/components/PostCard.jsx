import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CommentIcon from '@mui/icons-material/Comment';
import { Box } from '@mui/system';
import Skeleton from '@mui/material/Skeleton';
import { useParams } from 'react-router-dom';
import { kFormatter, postCreationTimeFormatter } from '../assets/Functions';
import Comment from './Comment';


const ExpandMore = styled((props) => {
  
 const { expand, ...other } = props;
 return <IconButton {...other} />;
})(({ theme, expand }) => ({
 transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
 marginLeft: 'auto',
 transition: theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
 }),
}));

export default function PostCard({ isFetching, isSuccess, isError, id, title, likes, img, user, postTime, comments, commentUrl }) {
 

 const [expanded, setExpanded] = React.useState(false);
  const [isUpArrowClicked, setIsUpArrowClicked] = React.useState(false)
  const [isDownArrowClicked, setIsDownArrowClicked] = React.useState(false)

  const { subredditName = 'pics' } = useParams()
  

  const handleUpClick = () => {
    setIsUpArrowClicked((prevState) => !prevState)
    setIsDownArrowClicked(false)
  }

  const handleDownClick = () => {
    setIsDownArrowClicked((prevState) => !prevState)
    setIsUpArrowClicked(false)
  }
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 return (
  <Box flex={2} mr={5}> 
     <Card sx={{ my: 5 }}>
       <CardHeader
         action={
           <Box
             sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               alignItems: 'center',
               height: 120,
             }}>
             <IconButton aria-label="votes"

             >
               {isFetching ? <Skeleton variant="rounded" width={20} height={10} /> : <ArrowUpwardIcon
                 onClick={() => handleUpClick()}
                 sx={{
                   fontSize: {
                     xs: 20,
                     md: 25,
                   },
                   color: isUpArrowClicked && 'green',
                   '&:hover': {
                     backgroundColor: grey[100],
                     borderRadius: 1,
                   },
                 }}
               />}
             </IconButton>
             <Typography
               sx={{
                 fontSize: {
                   xs: 12,
                   md: 18,
                 },
                 marginY: 1,
                 color:
                   (isUpArrowClicked && 'green') || (isDownArrowClicked && 'red'),
               }}
             >
               {isFetching ? <Skeleton variant="rounded" width={20} height={10} /> : kFormatter(likes)}
             </Typography>
             <IconButton aria-label="votes"
               sx={{

                 display: 'flex',
                 flexDirection: 'column',
                 borderRadius: 'none'
               }}
             >
               {isFetching ? <Skeleton variant="rounded" width={20} height={10} /> : <ArrowDownwardIcon
                 onClick={() => handleDownClick()}
                 sx={{
                   fontSize: {
                     xs: 20,
                     md: 25,
                   },
                   color: isDownArrowClicked && 'red',
                   '&:hover': {
                     backgroundColor: grey[100],
                     borderRadius: 1,
                   },
                 }}
               />}
               
             </IconButton>
           </Box>
         }
         title={isFetching ? <Skeleton variant="text" width={600} /> : title}
       />
       <CardContent>
         {isFetching ? <Skeleton variant="rounded" width={600} height={500} /> : <CardMedia
           component="img"
           height="100%"
           image={img}
           alt="Paella dish"
         />}
         <Box sx={{
           mt: 5,
           pt: 3,
           borderTop: `1px solid ${grey[300]}`,
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between'

         }}>
           <Typography
             color="secondary"
           >{isFetching ? <Skeleton variant="rounded" width={100} height={10} /> : user}</Typography>
           <Typography color={grey[600]}>{isFetching ? <Skeleton variant="rounded" width={50} height={10} /> : postCreationTimeFormatter(postTime)}</Typography>
           <CardActions disableSpacing
             expand={expanded}
             onClick={handleExpandClick}
             aria-expanded={expanded}
             aria-label="show more"
           >
             {isFetching ? <Skeleton variant="rounded" width={20} height={10} /> : <CommentIcon fontSize='small'
             />}
             <Typography fontSize={15} color={grey[600]} ml={1}>{isFetching ? <Skeleton variant="rounded" width={20} height={10} /> : kFormatter(comments)}</Typography>
           </CardActions>
         </Box>
       </CardContent >
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
           <Comment permalinkComment={commentUrl} />
         </CardContent>
       </Collapse>
     </Card>
   </Box>
 );
}

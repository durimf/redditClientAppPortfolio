import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CommentIcon from '@mui/icons-material/Comment';
import { Box } from '@mui/system';

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

export default function RecipeReviewCard() {
 const [expanded, setExpanded] = React.useState(false);

 const handleExpandClick = () => {
  setExpanded(!expanded);
 };

 return (
  <Card sx={{ my: 10}}>
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
      <ArrowUpwardIcon />
     </IconButton>
     <Typography>
      1.1K
     </Typography>
      <IconButton aria-label="votes"
       sx={{

        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'none'
       }}
      >
       <ArrowDownwardIcon />
      </IconButton>
      </Box>
    
     
    }
    title="Post Title"
    
   />
   
   <CardContent>
    <CardMedia
     
     component="img"
     height="100%"
     image="https://images.unsplash.com/photo-1662581872277-0fd0bf3ae8f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
     alt="Paella dish"
    />
   <Box sx={{
    mt: 5,
    pt: 3,
    borderTop: `1px solid ${grey[300]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
   }}>
     <Typography>Username</Typography>
     <Typography>Post Time</Typography>
     <CardActions disableSpacing
     >
      <CommentIcon fontSize='small'
       expand={expanded}
       onClick={handleExpandClick}
       aria-expanded={expanded}
       aria-label="show more"
      />
     </CardActions>
   </Box>
   </CardContent >
   <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
     <Typography paragraph>Method:</Typography>
     <Typography paragraph>
      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.
     </Typography>
     <Typography paragraph>
      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
      large plate and set aside, leaving chicken and chorizo in the pan. Add
      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
      stirring often until thickened and fragrant, about 10 minutes. Add
      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
     </Typography>
     <Typography paragraph>
      Add rice and stir very gently to distribute. Top with artichokes and
      peppers, and cook without stirring, until most of the liquid is absorbed,
      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
      mussels, tucking them down into the rice, and cook again without
      stirring, until mussels have opened and rice is just tender, 5 to 7
      minutes more. (Discard any mussels that don&apos;t open.)
     </Typography>
     <Typography>
      Set aside off of the heat to let rest for 10 minutes, and then serve.
     </Typography>
    </CardContent>
   </Collapse>
  </Card>
 );
}

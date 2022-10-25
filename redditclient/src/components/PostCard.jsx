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
import { useGetPostQuery } from '../features/api/apiSlice'
import Skeleton from '@mui/material/Skeleton';
import { useParams } from 'react-router-dom';
import { kFormatter, postCreationTimeFormatter } from '../assets/Functions';




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

export default function PostCard() {
 const [expanded, setExpanded] = React.useState(false);
 const { subredditName } = useParams()
 const { data: post, isFetching, isSuccess, error : isError } = useGetPostQuery
 (!subredditName ? 'pics' : subredditName)
  const [isUpArrowClicked, setIsUpArrowClicked] = React.useState(false)
  const [isDownArrowClicked, setIsDownArrowClicked] = React.useState(false)

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
  
 

  let content

  if (isFetching) {
    content = post ? 
      post.data.children.map((post, id) => {
        return (
          <Card  key={id}>
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
                    <ArrowUpwardIcon 
                     
                      />
                   
                  </IconButton>
                  <Typography>
                    <Skeleton variant="rounded" width={20} />
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
              title={<Skeleton variant="text" width={600} />}
            />
            <CardContent>
              <Skeleton variant="rounded" width={600} height={500} />
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
                ><Skeleton variant="text" width={80}/></Typography>
                <Typography><Skeleton variant="text" width={30} /></Typography>
                <CardActions disableSpacing
                >
                  <Skeleton variant="rounded" width={20} height={10} />
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
        )
      })
    : <h1>Loading...</h1>

  } else if (isSuccess) {
    content = post.data.children.map((post, id) => {
      return (
        <Card sx={{ my: 5 }} key={id}>
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
                  <ArrowUpwardIcon 
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
                  />
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
                  {kFormatter(post.data.ups)}
                </Typography>
                <IconButton aria-label="votes"
                  sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'none'
                  }}
                >
                  <ArrowDownwardIcon
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
                  />
                </IconButton>
              </Box>
            }
            title={post.data.title}
          />
          <CardContent>
            <CardMedia
              component="img"
              height="100%"
              image={post.data.url}
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
              <Typography
                color="secondary"
              >{post.data.author}</Typography>
              <Typography color={grey[600]}>{postCreationTimeFormatter(post.data.created_utc)}</Typography>
              <CardActions disableSpacing
              >
                <CommentIcon fontSize='small'
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                />
                <Typography fontSize={15} color={grey[600]} ml={1}>{kFormatter(post.data.num_comments)}</Typography>
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
      )
    })
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

 return (
  <Box flex={2} mr={5}> 
  {
       content
   
  }
   </Box>
 );
}

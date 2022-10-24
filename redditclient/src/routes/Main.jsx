import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import PostsContainer from '../features/posts/PostsContainer'
import SubredditsContainer from '../features/subreddits/SubredditsContainer'

function Main() {
  return (
   <Container
    
   >
    <Navbar />
    <Box sx={{
     display: 'flex',
     alignItems: 'start',
     justifyContent: 'space-between',

     m: 5,
    }}>
     {/* <PostsContainer /> */}
     <SubredditsContainer />
    </Box>
   </Container>
  )
}

export default Main
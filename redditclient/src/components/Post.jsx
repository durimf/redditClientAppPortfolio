import { Box } from '@mui/material'
import React from 'react'
import PostCard from '../assets/PostCard'

function Post() {
  return (
   <Box flex={2} mr={5}> 
    <PostCard />
   </Box>
  )
}

export default Post
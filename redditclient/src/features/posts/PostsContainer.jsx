import { Box } from '@mui/material'
import React from 'react'
import PostCard from '../../components/PostCard'


function PostsContainer() {
  return (
    <Box flex={2}>
    <PostCard />
    </Box>
  )
}

export default PostsContainer
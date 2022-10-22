import { Box } from '@mui/material'
import React from 'react'
import SubredditCard from '../assets/SubredditCard'

function Subreddit() {
  return (
    <Box
     
      height={'100vh'}
      flex={1}
      ml={5}
    >
      <SubredditCard />
    </Box>
  )
}

export default Subreddit
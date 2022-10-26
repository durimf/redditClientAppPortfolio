import React from 'react'
import { useGetCommentsQuery } from '../features/api/apiSlice'
import CommentCard from './CommentCard'
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';

function Comment({ permalinkComment }) {
  
  const { data: comments, isFetching, isSuccess, error: isError } = useGetCommentsQuery(permalinkComment)
 
  return (
   <>
      {isFetching ? 
        <Box >
          <Skeleton variant="rounded" width={700} height={20} sx={{
            marginBottom: 1,
          }} />
          <Skeleton variant="rounded" width={700} height={20} sx={{
            marginBottom: 1,
          }} />
          <Skeleton variant="rounded" width={700} height={20} mb={5} />

        </Box>
       
     
       : comments && comments[1].data.children.map((post,id) => {
      return <CommentCard
      key={id}
      id={id}
      isFetching={isFetching}  
      author={post.data.author}
      creationTime={post.data.created_utc}
      comment={post.data.body}
      />
    })}
    
   </>
  )
}

export default Comment
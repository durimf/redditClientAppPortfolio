import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import { useGetPostQuery } from '../api/apiSlice'



function PostsContainer() {

  const { subredditName = 'pics' } = useParams()
  
  const { data: post, isFetching, isSuccess, error: isError } = useGetPostQuery(subredditName)

  let content 

  if(isSuccess) {
    content = post.data.children.map((post,id) => {
     
      return <PostCard
        key={id}
        isFetching={isFetching}
        isSuccess={isSuccess}
        isError={isError}
        id={post.data.id}
        title={post.data.title}
        likes={post.data.ups}
        img={post.data.url}
        user={post.data.author}
        postTime={post.data.created_utc}
        comments={post.data.num_comments}
        commentUrl={post.data.permalink}
      />
    })
  }


  return (
    <Box flex={2}>
      {content}
    </Box>
  )
}

export default PostsContainer
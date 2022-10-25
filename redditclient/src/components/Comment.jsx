import React from 'react'
import { useGetCommentsQuery } from '../features/api/apiSlice'




function Comment({ permalinkComment }) {
  
  const { data: comments, isFetching, isSuccess, error: isError } = useGetCommentsQuery(permalinkComment)

 
 
  return (
   <h1>Pofla</h1>
  )
}

export default Comment
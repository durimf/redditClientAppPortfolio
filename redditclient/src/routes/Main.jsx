import React from 'react'
import Navbar from '../components/Navbar'
import PostsContainer from '../features/posts/PostsContainer'
import SubredditsContainer from '../features/subreddits/SubredditsContainer'



function Main() {
  return (
   <>
    <Navbar />
     <SubredditsContainer />
     <PostsContainer/>
   </>
  )
}

export default Main
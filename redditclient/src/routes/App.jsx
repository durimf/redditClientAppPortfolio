import {  
   Routes,
   Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container } from '@mui/material'
import { ThemeProvider } from "styled-components";
import darkTheme from "../styles/styles";
import SubredditsContainer from '../features/subreddits/SubredditsContainer'
import PostsContainer from '../features/posts/PostsContainer'
import Errorpage from "../pages/Errorpage";


export default function App() {
 return (
   <Box sx={{
      
   }}>
      <Navbar />
   <Box sx={{
      display: 'flex'
   }}>
          <Routes>
             <Route path="/" element={<PostsContainer />} />
             <Route path="/subreddit/:subredditName" element={<PostsContainer />} />
             <Route path="*" element={<h1>Error Pofla</h1>} />
          </Routes>
          <SubredditsContainer />
   </Box>
   </Box>
 );
}
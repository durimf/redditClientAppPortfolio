import {  
   Routes,
   Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container } from '@mui/material'
"styled-components";
import SubredditsContainer from '../features/subreddits/SubredditsContainer'
import PostsContainer from '../features/posts/PostsContainer'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function App() {

   const darkTheme = createTheme({
      palette: {
         mode: 'light',
      },
   });



 return (
    <ThemeProvider theme={darkTheme}>
   <Container>
      <Navbar  />
   <Box sx={{
      display: 'flex',
      m: 5,
      bgcolor: 'background.default'    
   }}>
          <Routes>
             <Route path="/" element={<PostsContainer  />} />
             <Route path="/subreddit/:subredditName" element={<PostsContainer />} />
             <Route path="*" element={<h1>Error Pofla</h1>} />
          </Routes>
          <SubredditsContainer />
   </Box>
   </Container>
    </ThemeProvider>
 );
}
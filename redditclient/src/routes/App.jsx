import {  
   Routes,
   Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container } from '@mui/material'
import { ThemeProvider } from "styled-components";
import darkTheme from "../styles/styles";
import SubredditsContainer from '../features/subreddits/SubredditsContainer'
import PostsContainer from '../features/posts/PostsContainer'
import Main from "./Main";


export default function App() {
 return (
   <Routes>
        <Route path="/" element={<Main />} />
       <Route path="/subreddit:subredditName" element={<Main />} />
    </Routes>
 );
}
import { BorderColor } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { blue, grey, orange, purple } from '@mui/material/colors'
import React from 'react'
import RedditIcon from '@mui/icons-material/Reddit';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { borderRadius, display } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  return (
    <Box sx={{
      my: 5,
      borderBottom: '1px solid',
      borderColor: grey[300],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    }}>
      <RedditIcon sx={{
        fontSize: 65,
        color: purple[700]
      }} />
     
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        
      }}>
        <DarkModeOutlinedIcon
          sx={{
            fontSize: 25,
            marginRight: 2,
          }}
        />
        <GitHubIcon sx={{
          fontSize: 25,
        }} />
      </Box>
    </Box>
  )
}

export default Navbar
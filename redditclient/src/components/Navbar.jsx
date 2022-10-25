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
      
      borderBottom: '1px solid',
      borderColor: grey[300],
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      bgcolor: 'background.default'
    }}>
     <Box sx={{
      display: 'flex',
      alignItems: 'center',
     }}>
        <RedditIcon sx={{
          fontSize: 55,
          color: 'white',
          backgroundColor: purple[700],
          borderRadius: '50%',
          p: 0.5,
          m: 2,
        }} />
          <Typography sx={{
            color: purple[700],
            fontSize: 25,
            fontWeight: 600,
            mr: 0.5,
            mt: 1,
            ml: 1,
          }} >Reddit
          </Typography>
        <Typography
        sx={{
          fontSize: 25,
          mt:1,
          fontWeight: 400
        }}>
          Minimal
        </Typography>
        
     </Box>
     
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        
      }}>
        <GitHubIcon sx={{
          fontSize: 25,
          mr: 2
        }} />
      </Box>
    </Box>
  )
}

export default Navbar
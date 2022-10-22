import { BorderColor } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'
import React from 'react'
import RedditIcon from '@mui/icons-material/Reddit';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Navbar() {
  return (
    <Box sx={{
      m: 3,
      borderBottom: '1px solid',
      borderColor: grey[300]
    }}>
      <RedditIcon sx={{
        fontSize: 70,
        color: orange[900]
      }} />
      <DarkModeOutlinedIcon />
    </Box>
  )
}

export default Navbar
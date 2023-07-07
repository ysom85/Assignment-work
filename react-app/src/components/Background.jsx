import * as React from 'react';
import './Background.css'
import {Box,styled} from '@mui/material';
const main_window = styled(Box)`
background: Red;
height: 100px;
width: 200px;
`
export default function Background() {
  return(
    <Box 
    sx={{
      height: 750,
      width: 1550,
      backgroundColor: 'Black',
    }}
    >
       <main_window />

       
    </Box>
  )
}
 
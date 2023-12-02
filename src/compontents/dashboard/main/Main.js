import { Box, Typography } from '@mui/material'
import React from 'react'

function Main() {
  return (
    <Box display={'flex'} border={"1px solid #fff"} margin={3} padding={2} justifyContent={"space-around"} >
      <Box bgcolor={"#fff"} padding={3} borderRadius={5} borderTop={'2px solid red'} >
        <Typography fontSize={"1.2rem"} color={"#505050"}>
          Total Posts
        </Typography>
        <Typography fontSize={"2rem"} color={"#909090"}>
          10
        </Typography>

      </Box>

      <Box bgcolor={"#fff"} padding={3} borderRadius={5} borderTop={'2px solid red'} >
        <Typography fontSize={"1.2rem"} color={"#505050"}>
          Total Posts
        </Typography>
        <Typography fontSize={"2rem"} color={"#909090"}>
          10
        </Typography>

      </Box>
      <Box bgcolor={"#fff"} padding={3} borderRadius={5} borderTop={'2px solid red'} >
        <Typography fontSize={"1.2rem"} color={"#505050"}>
          Total Posts
        </Typography>
        <Typography fontSize={"2rem"} color={"#909090"}>
          10
        </Typography>

      </Box>
  
      
    </Box>


  )
}

export default Main
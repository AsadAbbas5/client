import { Box, Typography } from '@mui/material'
import React from 'react'
import SubScripitioinSection from '../section/subscriptionSection/SubScripitioinSection'

function NotFound() {
  return (
    <div>
      <Box>
        <Typography fontSize={"10rem"} color={"#fff"}>404</Typography>
        <Typography color={"#fff"} fontSize={"2rem"}>Not Found</Typography>
      </Box>
      <SubScripitioinSection />
    </div>
  )
}

export default NotFound
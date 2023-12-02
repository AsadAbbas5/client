import { Box, Typography } from '@mui/material'
import React from 'react'
import SubScripitioinSection from '../section/subscriptionSection/SubScripitioinSection'

function BlogPages() {
    return (
        <Box>
            <Box margin={"1rem 0"}>
                <Typography fontSize={"2rem"} fontWeight={"600"} color={"#fff"} letterSpacing={5}>
                    Blog Title
                </Typography>
                
            </Box>
            <Box margin={"0.5rem 0"}>
                <Typography fontSize={"1rem"}  color={"#909090"} textAlign={"start"}>
                    Auth Name Data And Time
                </Typography>
                
            </Box>
            <Box>
            <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" width="100%"  />

            </Box>
            <Box>
                <Typography fontSize={"1.2rem"} color={"#fff"}>Blog Content</Typography>
            </Box>
            <SubScripitioinSection/>

        </Box>
    )
}

export default BlogPages
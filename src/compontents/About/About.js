import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SubScripitioinSection from '../section/subscriptionSection/SubScripitioinSection'

export default function About() {
    return (
        <Box>

        <Grid container bgcolor={"#778899"}>
            <Grid items md={6}>
                <Box marginLeft={"4rem"}>
                    <Typography fontSize={"2rem"} fontFamily={700} mt={"2rem"}>
                        Selling made simple
                    </Typography>
                </Box>
                <Box fontFamily={700} mt={"2rem"} marginLeft={"4rem"}>
                    <Typography fontSize={"1.2rem"}>
                        Try Shopify for free, and explore
                        all the tools and services you need
                        to start, run, and grow your business.
                    </Typography>
                </Box>
                <Box mt={"2rem"} justifyContent={"space-between"} marginLeft={"4rem"} padding={"0 4rem 0 8rem"}>
                    <Button
                        variant='contained'
                        style={{
                            fontSize: "1rem", // Change the font size as needed
                            padding: "1rem 2rem", // Change the padding as needed
                            backgroundColor: "green", // Change the background color as needed
                        }}
                    >
                        Start Free Trial
                    </Button>
                </Box>
            </Grid>
            <Grid items md={4}>
                <img src='https://www.westend61.de/images/0000928344pw/side-view-of-businessman-using-laptop-computer-while-working-in-office-CAVF48642.jpg' width={"140%"} style={{ marginLeft: "2rem" }} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid items md={6}  bgcolor={"#fff"}>
                <Typography fontSize={"3rem"} >
                    25 Awesome About Us Page Examples
                </Typography>
                <Typography fontSize={"1rem"}>
                    What are the features that make an About Us page engaging? Read on and be inspired by these 25 awesome About Us page examples.
                </Typography>
            </Grid>
            <Grid items md={4} flexDirection={"column"} bgcolor={"#dcdcdc"} width={"20rem"} ml={"13rem"} height={"18rem"}>
                <Box mt={"rem"} textAlign={"center"}>
                    <Typography fontSize={"4rem"}>
                        SEG TODAY
                    </Typography>

                </Box>
                <Box>
                    <Typography fontSize={"2rem"} fontFamily={700} textAlign={"center"} color={"#00fa9a "}>
                        join Our News Letters
                    </Typography>
                </Box>
                <Box>
                    <Typography fontSize={"2rem"} fontFamily={700} textAlign={"center"}>
                        <Box>
                            <Typography fontSize={"1rem"} textAlign={"center"} color={"#080808"}>
                                Get your daily dose of search know-how.
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
                <Box mt={"2rem"} ml={"2rem"} bgcolor="#91a3b0">
                    <TextField fullWidth label="Enter Your Email" placeholder='Email..' />
                </Box>
            </Grid>

        </Grid>
        <SubScripitioinSection/>
    </Box>

    )
}

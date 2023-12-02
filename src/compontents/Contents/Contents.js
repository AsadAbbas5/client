import { WidthFull } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import SubScripitioinSection from '../section/subscriptionSection/SubScripitioinSection';
function Contents() {
    return (
        
        <Box>
            <Box>
                <img src='https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/5ef206456e4e35a8c35133b3_MPG-1024x473.jpg' width={"100%"} />
            </Box>
            <Box textAlign={"center"} fontFamily={700} fontSize={"2rem"} bgcolor={"#fff"}>
                Ny Byggnation
            </Box>
            <Box bgcolor={"#fff"} textAlign={"center"}>
                <Typography>
                    Contentus har som långsiktigt mål att växa i Sverige och en <br /> viktig del av detta är företagets
                    <br />kontinuerliga arbete med förvärv och nybyggnation. Fokus vid nybyggnation är att <br />
                    bygga hyresrätter i attraktiva lägen inom Contentus kärnmarknader i
                    <br />Ystad och Malmö. I Contentus projektportfölj finns fyra större projekt som sammanlagt
                    <br /> uppgår till en investeringsvolym om
                    <br />ca 1.000 mkr.
                </Typography>
                <Grid container>
                    <Grid items md={4}>
                        <Typography color={"blue"} fontSize={"2rem"} fontFamily={700}>
                            Zephyr, 182 lägenheter nya lägenheter planeras i centrala Ystad
                        </Typography>0
                        <Typography fontSize={"1rem"} fontFamily={400}>
                            Contentus planerar nu Zephyr, 182 nya lägenheter i centrala ystad med premiumfaciliteter som ingår i boende
                        </Typography>
                        <Box mt={"2rem"}>
                            <Button variant='contained'>
                                LAS MER
                            </Button>
                        </Box>
                    </Grid>
                    <Grid items md={6} ml={"11rem"}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWzqUIIvwXygiANznSwrB9ZdwYpKghzSr6g&usqp=CAU' width={"100%"} />

                    </Grid>


                </Grid>

                <Grid container>



                    <Grid items md={6}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QXXScrq4ImcfIuZPcXBLLA8a-CAL5lbTCQ&usqp=CAU' width={"100%"} />

                    </Grid>
                    <Grid items md={4}>
                        <Typography color={"blue"} fontSize={"2rem"} fontFamily={700}>
                            Seniorlägenheter för 55+ på Sege Park i Malmö!
                        </Typography>0
                        <Typography fontSize={"1rem"} fontFamily={400}>
                            Hyr modern lägenhet med hög standard på Sege Park i Malmö! Endast 500 meter från golfbanans greener!
                        </Typography>
                        <Box mt={"2rem"}>
                            <Button variant='contained'>
                                LAS MER
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <SubScripitioinSection/>
        </Box >
    )
}

export default Contents
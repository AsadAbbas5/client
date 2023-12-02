import { Box, Container } from '@mui/material'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './compontents/home/Home'
import NaveBar from './compontents/libarary/NaveBar'
import About from './compontents/About/About'
import Posts from './compontents/posts/Posts'
import Contents from './compontents/Contents/Contents'
import Footer from './compontents/section/subscriptionSection/footer/Footer'
import SignIn from './compontents/SignIn/SignIn'
import Template from './compontents/dashboard/Template'
import Main from './compontents/dashboard/main/Main'
import DashboardPosts from './compontents/dashboard/posts/DashboardPosts'
import Configration from './compontents/dashboard/configration/Configration'
import AddPosts from './compontents/dashboard/addPosts/AddPosts'

function AppPrivite() {
    return (
        <Box>
            <NaveBar />
            <Container>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/blogs" Component={Posts} />
                    <Route path="/contact" Component={Contents} />
                    <Route path="/dashboard" Component={Template} >
                        <Route index Component={Main} />
                        <Route path='posts' Component={DashboardPosts} />
                        <Route path='configrations' Component={Configration} />
                        <Route path='addPost' Component={AddPosts} />

                    </Route>

                </Routes>
            </Container>
            <Footer />
        </Box>
    )
}

export default AppPrivite
import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './compontents/home/Home'
import NaveBar from './compontents/libarary/NaveBar'
import About from './compontents/About/About'
import Posts from './compontents/posts/Posts'
import Contents from './compontents/Contents/Contents'
import Footer from './compontents/section/subscriptionSection/footer/Footer'
import SignIn from './compontents/SignIn/SignIn'

function Apppublic() {
  return (
    <Box>
      <NaveBar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About} />
        <Route path="/blogs" Component={Posts} />
        <Route path="/contact" Component={Contents} />
        <Route path="/signin" Component={SignIn}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default Apppublic
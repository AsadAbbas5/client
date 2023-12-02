import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./navebar.module.css"
import { connect } from "react-redux"

function NaveBar({ islogin }) {
  return (
    <Box borderBottom="1px solid blue" p={3} display={"flex"} justifyContent={"space-between"} >
      <Typography sx={{ color: "#22d3ee" }} fontSize="1.5em" fontWeight="800">
        Byte  Tech
      </Typography>
      <Box>
        <Link to={"/"} className={style.link}>Home</Link>
        <Link to={"/about"} className={style.link}>About</Link>
        <Link to={"/blogs"} className={style.link}>Blogs</Link>
        <Link to={"/contact"} className={style.link}>Contact</Link>

        {
          !islogin ?
            <Link to={"/signin"} className={style.link}>Signin</Link> :
            <Link to={"/dashboard"} className={style.link}>dashboard</Link>

        }

      </Box>
    </Box>
  )

}

const mapStateProps = (state) => {
  return {
    islogin: state.auth.islogin
  }
}

export default connect(mapStateProps)(NaveBar)
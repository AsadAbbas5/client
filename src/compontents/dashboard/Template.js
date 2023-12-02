import React from 'react'
import { Box } from "@mui/material"
import { Link, Outlet } from 'react-router-dom'
import style from "./templete.module.css"
function Template() {
  return (
    <Box display={"flex"}>
      <Box width={"20%"} borderRight={"1px solid #fff"} display={"flex"} flexDirection={"column"} alignItems={"start"}>
        <Link to="/dashboard" className={style.link}>Main</Link>
        <Link to="/dashboard/addPost" className={style.link}>Add Post</Link>
        <Link to="/dashboard/posts" className={style.link}>Posts</Link>
        <Link to="/dashboard/configrations" className={style.link}>configration</Link>
      </Box>
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  )
}
export default Template
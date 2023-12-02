import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SignIn() {

    const navigator = useNavigate()
    const dispatch = useDispatch()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const checklogin = () => {

        if (!email || !password) {
            setError("fill All The Fields")
        } else {

            const data = {
                email: email,
                password: password
            }
            axios.post("http://localhost:5000/api/user/signin", data).then(
                res => {
                    dispatch({ type: "signin", data: res.data })
                    localStorage.setItem("token",res.data.token)
                    navigator("/dashboard")

                }
            ).catch(
                error => {
                    console.log(error)

                }
            )
            setError("")
        }
    }
    return (
        <Box display={"flex"} height={"110vh"} justifyContent={"center"} alignItems={"center"}>
            <Box bgcolor={"#fff"} width="20rem" padding={"3rem"}>

                <Typography fontSize={"2rem"} fontWeight={600} margin={"1rem 0"}>Sign In</Typography>
                <Box marginLeft={"8rem"}>
                    <Avatar
                        sx={{
                            width: 50,
                            height: 50,
                            fontSize: 30,
                            backgroundColor: '#555d50',
                            color: 'white',
                        }}
                    >

                    </Avatar>
                </Box>
                <Box margin={"1rem 0"}>

                    <TextField value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Your email...' label="Email..." type='Email' fullWidth />
                </Box>
                <Box margin={"1rem 0"}>
                    <TextField value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Your password...' label="Password.." type='password' fullWidth />
                    {
                        error ? error : ""
                    }
                </Box>
                <Box>

                    <Button fullWidth onClick={checklogin} variant='contained' sx={{ marginTop: "0.5rem", height: "2.5rem", width: "15rem" }}>Sign in<LockOpenIcon /></Button>
                </Box>


            </Box>
        </Box>
    )
}

export default SignIn
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';
function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const signup = () => {

        if (!email || !password) {
            setError("fill All The Fields")
        } else {
            const data = {
                email: email,
                password: password
            }
            axios.post("http://localhost:5000/api/user/signup", data).then(
                res => console.log(res)
            ).catch(
                error => console.log(error)
            )
            setError("")
        }
    }

    return (

        <Box display={"flex"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Box bgcolor={"#fff"} width="20rem" padding={"3rem"} >
                <Typography fontSize={"2rem"} fontWeight={600} margin={"1rem 0"}>Sign Up</Typography>
                <Box margin={"1rem 0"}>
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

                    <br />
                    <TextField value={email} onChange={(event) => setEmail(event.target.value)} fullWidth placeholder='Enter Your Email...' type='email' label="Email" />
                </Box>
                <Box margin={"1rem 0"}>
                    <TextField value={password} onChange={(event) => setPassword(event.target.value)} fullWidth placeholder='Enter Your Passwird...' type='password' label="password" />

                </Box>
                <Typography>
                    {error ? error : ""}
                </Typography>
                <Button variant='contained' onClick={signup}><ExitToAppIcon />sign up</Button>

            </Box>
        </Box>
    )
}

export default SignUp
import React from 'react'
import { Field, Form } from 'react-final-form'
import Textinput from '../../libarary/form/Textinput'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
function AddPosts() {



      

  const handleAddPost =  async(data) => {
        try{

          let result = await axios.postForm("/api/addpost/add" )
        }catch(error){
            console.log(error)
        }

  }
  
  const validateAddPost = (data, form) => {
    console.log("validata", data)
  }
  return (
    <div>
      <Form
        onSubmit={handleAddPost}
        validate={validateAddPost}
        render={({ handleSubmit}) => {
          return (
            <form className='addPostFrom' onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
              <Box padding={3}>
                <Typography fontWeight={"550"} textAlign={"start"} color={"#909090"} paddingBottom={2}> Blog Title</Typography>
                <Field fullWidth component={Textinput} name='blogTitle' type='text' placeholder="blogTitle" label="BlogTitle" />
              </Box>
              <Box padding={3}>
                <Typography fontWeight={"550"} textAlign={"start"} color={"#909090"} paddingBottom={2}> shortDescription</Typography>

                <Field label="ShorDescription" fullWidth component={Textinput} name='shortDescription' type='text' placeholder="shortDescription" />
              </Box>
              <Box padding={3}>
                <Typography fontWeight={"550"} textAlign={"start"} color={"#909090"} paddingBottom={2}>Description</Typography>

                <Field multilin component={Textinput} maxRows={5} fullWidth name='Description' type='text' placeholder="Description" label="Description" />
              </Box>
              <Box>
                <Button type='submit' variant='contained'>Add Post</Button>
              </Box>
            </form>
          )
        }}
      />
    </div>
  )
}

export default AddPosts
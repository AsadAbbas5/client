import { TextField } from '@mui/material'
import React from 'react'

function Textinput(props) {
  const { input, meta, ...rest } = props
  const { error, touched } = meta
  return (
    <div>
      <TextField {...input} {...meta} {...rest} />
    </div>
  )
}

export default Textinput
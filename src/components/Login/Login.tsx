import { Box } from '@mui/material'
import React from 'react'



function Login() {
    const mode = localStorage.getItem("mode")

  return (
    <Box sx={{
        textAlign:'center',
        m: 1,
        p: 4,
        bgcolor: (mode === 'dark' ? '#101010' : '#fff'),
        color: (mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (mode=== 'dark' ? 'grey.800' : 'grey.300'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}>Login........</Box>
  )
}

export default Login
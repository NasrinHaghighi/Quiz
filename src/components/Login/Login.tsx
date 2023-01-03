import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import {  useAppDispatch, useAppSelector } from '../../app/hooks'

function Login() {
const mode=localStorage.getItem('mode')
  //console.log(mode)
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
      }}>
      kkkk
      </Box>
  )
}

export default Login
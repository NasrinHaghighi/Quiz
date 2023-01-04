import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import {Number} from './styles'
import {  useAppDispatch, useAppSelector } from '../../app/hooks'
function Login() {
  //const mode = localStorage.getItem("mode")
   const modeState=useAppSelector(state=>state.mode.mode)
   let mode = modeState? 'dark': 'light'
   const start=useAppSelector(state=>state.start)
   console.log(start)

useEffect(() => {
  console.log(mode)
}, [])


const [active, setActive] = useState(1)
  console.log(mode)
  return (
    <Box sx={{
        textAlign:'center',
        m: 1,
        p: 4,
        bgcolor: (mode === 'dark' ? '#101010' : '#fff'),
        color: (mode === 'dark' ? '#fff' : '#000'),
        border: '1px solid',
        borderColor: (mode === 'dark' ? 'red' : 'yellow'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}>
     222

      </Box>
  )
}

export default Login
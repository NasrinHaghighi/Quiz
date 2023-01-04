import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react'
import Switch from "react-switch";
import { useAppDispatch, useAppSelector  } from "../../app/hooks";
import {changeMode} from '../../features/ModeSlice'




function Header() {

  const dispatch=useAppDispatch()

  const modeState=useAppSelector(state=>state.mode.mode)
  let mode=modeState? 'dark': 'light'
  //const mode =localStorage.getItem('mode')

  const handelToggle = ()=>{
  dispatch(changeMode())
    
   }
    //const mode = localStorage.getItem("mode")
  return (
      <Box 
      sx={{
        display:'flex' ,
        justifyContent:'space-between',
        m: 1,
        p: 4,
        bgcolor: (mode === 'dark' ? '#101010' : '#fff'),
        color: (mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (mode === 'dark' ? 'grey.800' : 'grey.300'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
      >

     <Switch onChange={handelToggle} checked={modeState} />
     <Box  sx={{
        display:'flex' ,
        justifyContent:'space-between',
        m: 1,
      width:150,
          
      }}>
     <Link to='/login'>Login</Link> 
     <Link to='/'>Back</Link> </Box>
     </Box>

  )
}

export default Header
import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {  useAppDispatch, useAppSelector } from '../../app/hooks'
import {loginHandel} from '../../features/LoginSlice'


function Location() {
  const dispatch=useAppDispatch()
    const modeState=useAppSelector(state=>state.mode.mode)
  let mode=modeState? 'dark': 'light'

  const loginInfo=useAppSelector(state=>state.login)

  const loginFunc=(e:any)=>{
    let namefilde=e.target.name
    let value=e.target.value
dispatch(loginHandel({namefilde, value}))
}


  return (
    <div>
  <Typography variant="h4" sx={{m:2, p:3}}>Location</Typography>

  <Typography variant="h6" align='left'> City</Typography>
<TextField    required    id="outlined-required"  fullWidth name='city' value={loginInfo.login.city} onChange={loginFunc}
        sx={{ border: '1px solid',
          bgcolor: '#fff',
          color: (mode === 'dark' ? '#fff' : '#000'),
        borderColor: (mode === 'dark' ? '#fff' : 'Gray'), borderRadius:'10px', marginBottom:'20px'}}/>

<Typography variant="h6" align='left'> Country</Typography>
<TextField    required    id="outlined-required"  fullWidth name='country' value={loginInfo.login.country} onChange={loginFunc}
        sx={{ border: '1px solid',
          bgcolor: '#fff',
          color: (mode === 'dark' ? '#fff' : '#000'),
        borderColor: (mode === 'dark' ? '#fff' : 'Gray'), borderRadius:'10px'}}/>

   </div>

  )
}

export default Location
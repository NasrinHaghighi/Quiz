import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {  useAppDispatch, useAppSelector } from '../../app/hooks'

import {loginHandel} from '../../features/LoginSlice'

function Basic() {

 const dispatch=useAppDispatch()

  const modeState=useAppSelector(state=>state.mode.mode)
  let mode=modeState? 'dark': 'light'


  const loginInfo=useAppSelector(state=>state.login)
  //console.log(loginInfo.login.name)

const loginFunc=(e:any)=>{
    let namefilde=e.target.name
    let value=e.target.value
dispatch(loginHandel({namefilde, value}))
}
  return (
    <div>
  <Typography variant="h4" sx={{m:2, p:3}}>Basic Information</Typography>

  <Typography variant="h6" align='left'> Name</Typography>
<TextField    required    id="outlined-required"  fullWidth name='name' value={loginInfo.login.name} onChange={loginFunc}
        sx={{ border: '1px solid',
          bgcolor: '#fff',
          color: (mode === 'dark' ? '#fff' : '#000'),
        borderColor: (mode === 'dark' ? '#fff' : 'Gray'), borderRadius:'10px', marginBottom:'20px'}}/>

<Typography variant="h6" align='left'> Email</Typography>
<TextField    required    id="outlined-required"  fullWidth name='email' onChange={loginFunc} value={loginInfo.login.email}
        sx={{ border: '1px solid',
          bgcolor: '#fff',
          color: (mode === 'dark' ? '#fff' : '#000'),
        borderColor: (mode === 'dark' ? '#fff' : 'Gray'), borderRadius:'10px'}}/>

   </div>
  )
}

export default Basic
import React from 'react'
import {  useAppSelector } from '../../app/hooks'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Conformation() {
  const loginInfo=useAppSelector(state=>state.login)
 

  return (
    <Box  sx={{ textAlign:'center', paddingLeft:'50px'}}>
       <Typography variant="h4" sx={{m:2, p:3}}>Name:{' '} {loginInfo.login.name}</Typography>
       <Typography variant="h4" sx={{m:2, p:3}}>Email:{' '} {loginInfo.login.email}</Typography>
       <Typography variant="h4" sx={{m:2, p:3}}>City:{' '} {loginInfo.login.city}</Typography>
       <Typography variant="h4" sx={{m:2, p:3}}>Country:{' '} {loginInfo.login.country}</Typography>
       <Typography variant="h4" sx={{m:2, p:3}}>Job:{' '} {loginInfo.login.job}</Typography>
    </Box>
  )
}

export default Conformation
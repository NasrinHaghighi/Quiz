import { Box ,Link} from '@mui/material';
import React from 'react'
import Switch from "react-switch";





interface Check{
    checked:boolean,
    handelToggle:any
  }
function Header({checked, handelToggle}:Check) {
    const mode = localStorage.getItem("mode")
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

     <Switch onChange={handelToggle} checked={checked} />
     <Box  sx={{
        display:'flex' ,
        justifyContent:'space-between',
        m: 1,
      width:150,
          
      }}>
     <Link href='/login'>Login</Link> 
     <Link href='/'>Back</Link> </Box>
     </Box>

  )
}

export default Header
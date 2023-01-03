import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Box, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

import ResultItem from './ResultItem/ResultItem';


const accent = green[900]

function Result() {
  const mode = localStorage.getItem("mode")
    const result = useAppSelector(state=> state.userAnswers)



  return (
    <Box
    sx={{
      textAlign:'center',
      m: 1,
      p: 4,
      bgcolor: (mode === 'dark' ? '#101010' : '#fff'),
      color: (mode === 'dark' ? '#fff' : '#000'),
    borderColor: (mode === 'dark' ? '#fff' : 'red'),
      borderRadius: 2,
      fontSize: '0.875rem',
      fontWeight: '700',
    }}
  >
     <Typography variant='h4' color={accent} >Final result of your quiz</Typography>
     {result.result.map((r, i)=>{
        return <ResultItem key={i} r={r}/>
     })}
     {/* <Box><Button onClick={()=>handelClick()}>Start Again</Button></Box> */}
  </Box>
  )
}

export default Result
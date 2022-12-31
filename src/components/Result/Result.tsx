import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { Box, Typography ,Button} from '@mui/material';
import { purple, red,green } from '@mui/material/colors';

import ResultItem from './ResultItem/ResultItem';
const accent = green[900]

function Result() {
    
    const result = useAppSelector(state=> state.userAnswers)
    



  return (
    <Box
    sx={{
    
      m: 1,
      p: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      border: '1px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      borderRadius: 2,
      fontSize: '0.875rem',
      fontWeight: '700',
    }}
  >
     <Typography variant='h4' color={accent} >Final result of your quiz</Typography>
     {result.result.map((r, i)=>{
        return <ResultItem key={i} r={r}/>
     })}
  </Box>
  )
}

export default Result
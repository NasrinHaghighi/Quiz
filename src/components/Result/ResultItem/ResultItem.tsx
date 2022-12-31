import React from 'react'
import { QuestionState } from "../../../API";
import { Box, Typography ,Button} from '@mui/material';

interface R{
    r:QuestionState
}

function ResultItem({r}:R) {

  return (
    <Box
    sx={{
      textAlign:'center',
      m:3,
      p: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      borderBottom: '1px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
  
     
    }}
  >
    <Typography variant='h6' >{r.question}</Typography>
    {r.userAnswer === r.correct_answer ? <Typography variant='h6' >{r.userAnswer}</Typography> : <Typography variant='h6' >wrong</Typography>}
    
  </Box>
  )
}

export default ResultItem
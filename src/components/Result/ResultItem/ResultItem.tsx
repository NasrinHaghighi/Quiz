import React from 'react'
import { QuestionState } from "../../../API";
import { Box, Typography ,Button} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DangerousIcon from '@mui/icons-material/Dangerous';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { red ,green} from '@mui/material/colors';
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

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
    {r.userAnswer === r.correct_answer ? <Typography variant='h6' sx={{display:'flex', justifyContent:'center' ,alignItems:'center'}}><ThumbUpAltIcon color="success"/>{' '}{r.userAnswer}</Typography> 
    
    : 
    <div>
    <Typography variant='h6' sx={{display:'flex', justifyContent:'center' ,alignItems:'center'}}><DangerousIcon sx={{ color: red[500] }}/> {' '} {r.userAnswer}</Typography>
    <Typography variant='h6' sx={{display:'flex', justifyContent:'center' ,alignItems:'center'}}> <QuestionAnswerIcon sx={{ color: green[500] }}/> {' '} {r.correct_answer}</Typography>
    </div>
    }
    
  </Box>
  )
}

export default ResultItem
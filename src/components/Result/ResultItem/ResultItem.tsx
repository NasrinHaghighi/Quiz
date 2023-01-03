import React from 'react'
import { QuestionState } from "../../../API";
import { Box, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DangerousIcon from '@mui/icons-material/Dangerous';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { red ,green} from '@mui/material/colors';


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
      bgcolor: ( '#fff'),
      color: ('#000'),
      borderBottom: '1px solid',
   borderRadius:2,
      borderColor: ('gray') 
  
     
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
import React, {useState,useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

//import { Conatiner } from './styles'
import { Box, Typography ,Button} from '@mui/material';
import Progress from '../Progress/Progress';

import {AnswerContainer} from './styles'
import { getUserAnswers } from '../../features/UserAnswersSlice';
import Result from '../Result/Result';
import {scoreState} from '../../features/ScoreSlice'

import { red ,pink,blue} from '@mui/material/colors';


function QuestionCard({showResult, seeResult}:any) {
    const dispatch=useAppDispatch()
    const [index, setIndex] =useState<number>(0)
    const [score, setScore] =useState<number>(0)
     const [userAnswer, setUserAnswer] =useState<string>()
     const start= useAppSelector(state=>state.start)
     const questions= useAppSelector(state=>state.questions)
//to chane disable of next btn
     const [userCliked, setUserClicked]= useState<boolean>(false)
  
     //to find category of quiz
     var keyArray = questions.questions.map(function(item) { return item["category"]; });
    const category = keyArray[0]

//console.log(seeResult)
///onclick on the answer
   const answerhandle=(e:any)=>{
    setUserAnswer(e.target.value)
    setUserClicked(true)
   }
   //console.log(userAnswer)
   const goToNext=(e:any)=>{
    if(questions.questions[index].correct_answer === userAnswer){
     dispatch(scoreState())
        }
   setUserAnswer('')
   
        if(index < questions.questions.length){
            setIndex(index+1)
      }
      
      
      let ques=questions.questions[index]
     dispatch(getUserAnswers({...ques, userAnswer}))
   }

   //console.log(`index +${index} score + ${score}`)
  //to set nextbtn to disable in each question// 
   useEffect(() => {
  setUserClicked(false)
   }, [index])

const getColor=(c:string)=>{
  if(c === 'easy'){
return blue[800]
  }else if(c === 'hard'){
    return red[800]
  }
  else if(c === 'meduim'){
    return pink[500]
  }
}

  return (
    <Box sx={{
      textAlign:'center',
      m: 1,
      p: 4,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      border: '1px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      borderRadius: 2,
      fontSize: '0.875rem',
      fontWeight: '700',
    }}>
     <Box
        sx={{
          display: 'flex',
          justifyContent:'space-between',
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
        <Typography variant='h6'>Category {' '}:<span >{' '}{category}</span></Typography>
        <Typography variant='h6' sx={{ color: getColor(start.difficulty)}}>Difficulty {' '}:<span >{' '}{start.difficulty}</span></Typography>
        
      </Box>
   
      <Box  sx={{
          display: 'flex',
          justifyContent:'center',
          m: 1,
          p: 2,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
         
        }}>
            
          
        
              { index<questions.questions.length ? 
            
            <Typography variant='h6'>Question:{index+1}/{start.number}</Typography>
            :
            seeResult ? <Progress /> : <Typography variant='h6' color="secondary"> You Completed the quiz</Typography>
            }

            
        
        </Box>
        {/* question and answer box */}
        {index<questions.questions.length ? 
        <Box>
   
        <Typography variant='h4'sx={{ m: 4 }}>{questions.questions.length>1 ? questions.questions[index].question : null}</Typography>

        <AnswerContainer>
           {questions.questions.length>1 ?
           questions.questions[index].answers.map((ans, i)=>{
                return <Button variant="outlined" key={i} sx={{m:3, p:2, fontSize:18}} value={ans} onClick={answerhandle}>{ans}</Button>
            } ): null}  
     
        </AnswerContainer>
        </Box>: null}
         {/* question and answer box */}
         {/* btn.... */}
        {!seeResult ? 
        <Box sx={{ textAlign:'right' }}>
        {index<questions.questions.length ? 
        <Button variant="contained" disabled={userCliked ? false : true} sx={{m:3, fontSize:18, width:200}} onClick={goToNext} >Next Question</Button>
        :  
        <Button variant="contained"
        sx={{
          textAlign:'center',
          m: 1,
          p: 4,
          width:200 ,
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
         color="success"  onClick={showResult}>See Result</Button>
}   </Box>: null}

        {seeResult ? <Result /> :null}
    </Box>
  )
}

export default QuestionCard
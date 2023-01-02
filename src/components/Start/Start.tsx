import React ,{useState,useEffect}from 'react'
import {Conatiner} from './styles'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Typography from '@mui/material/Typography';
import QuestionCard from '../QuestionCard/QuestionCard';


import {startSetupHandle} from '../../features/StartSlice'
import {  useAppDispatch } from '../../app/hooks'
import { fetchData } from '../../API';
import { getQuestions } from '../../features/QuestionsSlice';
import { QuestionState } from "../../API";
import { Box } from '@mui/material';
import Switch from "react-switch";

interface Props{
  number:number,
  category:number,
difficulty:string
}
interface Start_type{
  start:Props
}
interface Check{
  checked:boolean,
  handelToggle:any
}
function Start({checked, handelToggle}:Check) {

  const [loading, setLoading] =useState(false)
  const [questions, setQuestions] =useState<QuestionState[]>([])
  const [gameOver, setgameOver]=useState(true)
  const [seeResult, setSeeresult]=useState(false)


const dispatch=useAppDispatch()
const [start, setStart] =useState<Props>({number:5, category:26, difficulty:'easy'})




  const HandelStart=(e:any)=>{
    const value = e.target.value;
    const name = e.target.name;
    setStart({
      ...start,
      [name]:value
    })
 
  }

  const startGame=async (start:Start_type)=>{
    setLoading(true);
     setgameOver(false)
     const newQuestions = await fetchData(start)
     setQuestions(newQuestions)
     
     setLoading(false)
  }

  
useEffect(() => {
dispatch(getQuestions(questions))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [questions])

const showResult=()=>{
  setSeeresult(true)
}
//console.log(questions)


  return (
   <>
  
   {gameOver && !loading ?
      <Box  sx={{
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
   <Box sx={{textAlign:'left',  m: 1,   p: 2,}}>
    
   <Switch onChange={handelToggle} checked={checked} />
   </Box>
        <Typography variant="h1" sx={{m:2, p:3}}>Start Your Quiz</Typography>
        <FormControl fullWidth  sx={{ paddingBottom:2 }}>
<Typography variant="h6" align='left'> Number of Questions</Typography>
<TextField    required    id="outlined-required"   defaultValue={start.number} name='number' onChange={(e)=>HandelStart(e)}  style={{marginBottom:50}}/>


<Typography variant="h6" align='left' > Category</Typography>
     
        <InputLabel id="demo-simple-select-label" ></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{marginBottom:50}}
          value={start.category}
          name='category'
          onChange={(e)=>HandelStart(e)}
         >
          <MenuItem value={27}>Animals</MenuItem>
          <MenuItem value={21}>Sport</MenuItem>
          <MenuItem value={23}>History</MenuItem>
          <MenuItem value={25}>Art</MenuItem>
          <MenuItem value={24}>Politics</MenuItem>
          <MenuItem value={26}>Celebrities</MenuItem>
        </Select>


        <Typography variant="h6" align='left'> Select Difficulty</Typography>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{marginBottom:50}}
          
          value={start.difficulty}
          name='difficulty'
          onChange={(e)=>HandelStart(e)}
         >
          <MenuItem value='easy'>Easy</MenuItem>
          <MenuItem value='meduim'>Meduim</MenuItem>
          <MenuItem value='hard'>Hard</MenuItem>
        </Select>


      </FormControl>
       <Button variant="contained" onClick={()=>dispatch(startSetupHandle(start))&& startGame({ start }) }>Start Quiz</Button>


     
     </Box>  : null}
     {loading && <h1>Loading...</h1>}
     {!loading && !gameOver ?
     <QuestionCard showResult={showResult} seeResult={seeResult}/>: null
    }

        </>
  )
}

export default Start
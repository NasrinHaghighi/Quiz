import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {Number, Container, Steps, BtnContainer} from './styles'
import { useAppSelector } from '../../app/hooks'
import Basic from './Basic';
import Location from './Location';
import Job from './Job';
import Conformation from './Conformation';

import Done from './Done';
import { Link } from "react-router-dom";

function Login() {
  //const mode = localStorage.getItem("mode")
   const modeState=useAppSelector(state=>state.mode.mode)
   let mode = modeState? 'dark': 'light'
   const [active, setActive] = useState(0)
  const steps=['Basic', 'Location', 'Job','Confermation', 'Done']

const nextHandel=()=>{
if(active<steps.length-1){
  setActive(active+1)
}else{
  return
}
}
const prevHandel=()=>{
  if(active>=0){
    setActive(active-1)
  }else{
    return 
  }
}
const showStep=(ac:number)=>{
  switch (ac) {
    case 0:
       return <Basic /> ;
       case 1:
        return <Location /> ;
        case 2:
          return <Job /> ;
          case 3:
            return <Conformation /> ;
            case 4:
              return <Done /> ;
    default:
      return ;
  }
}

  //console.log(active)
  return (
    <Box sx={{
        textAlign:'center',
        m: 1,
        p: 4,
        bgcolor: (mode === 'dark' ? '#101010' : '#fff'),
        color: (mode === 'dark' ? '#fff' : '#000'),
        border: '1px solid',
        borderColor: (mode === 'dark' ? 'red' : 'yellow'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}>
    <Box sx={{
       display:'flex',
       justifyContent:'space-between',
        m: 1,
        p: 4,
        paddingRight:'100px',
        paddingLeft:'100px',
        bgcolor:'#fff',
        color: (mode === 'dark' ? '#fff' : '#000'),
        border: '1px solid',
        borderRadius:2
       }}
    >
     {steps.map((s, i)=>{
      return <Number key={i} className={i === active ? 'active' : 'diactive'} >{s}</Number>
     })}
    
    </Box>
    <Container className={mode === 'dark' ? 'dark' : ''}>
       <Steps>Steps : {active+1}\5</Steps> 
      <div>
     {showStep(active)}
      </div>

    { active === steps.length-1 ?   <Link to='/'>Back</Link> :
      <BtnContainer>
      <Button variant="contained" onClick={()=>prevHandel()} disabled ={active> 0 ? false : true}>Prev</Button>
      <Button variant="contained" onClick={()=>nextHandel()} disabled ={active<steps.length-1 ? false : true}>Next</Button>
      </BtnContainer>  }
    </Container>

      </Box>
  )
}

export default Login
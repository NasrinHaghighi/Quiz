import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { Box, Typography ,Button} from '@mui/material';


function Progress() {
  const userScore=useAppSelector(state=>state.score.score)
  const totalNumber=useAppSelector(state=>state.start.number)
  //console.log(userScore)
  let score = userScore / totalNumber*100
  //console.log(score)
    const [progress, setProgress] = React.useState(userScore);

    React.useEffect(() => {
        const timer = setInterval(() => {
          //setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
  return (
    <>
    <div>  <CircularProgress variant="determinate" value={score} />
    
    <Typography variant='h6' sx={{display:'flex', justifyContent:'center' ,alignItems:'center'}}> {' '} {score} %</Typography>
    </div>
    </>
  )
}

export default Progress


  
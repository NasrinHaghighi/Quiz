import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function Progress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
  return (
    <>
    <div>  <CircularProgress variant="determinate" value={75} /></div>
    <div> %</div>
    </>
  )
}

export default Progress


  
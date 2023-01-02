import React ,{useState, useEffect}from "react";
//import { useSelector , useDispatch} from "react-redux";
import "./App.css";
import Start from './components/Start/Start'

import { ThemeProvider, createTheme } from '@mui/material/styles';

function  App () {
  const [checked, setChecked] =useState(false)
  const [mode, setMode] =useState<'light' | 'dark'>('light')

 


  const handelToggle = ()=>{
setChecked(!checked)
  }
  useEffect(() => {
  setMode((pre)=>(pre === 'light' ? 'dark' :'light'))
  }, [checked])

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
return (
  <ThemeProvider theme={theme}>
    <div className="App">
    
     <Start handelToggle={handelToggle} checked={checked}/>

     
   </div>
   </ThemeProvider>
  );
}

export default App;


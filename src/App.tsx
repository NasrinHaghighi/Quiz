import React, { useState } from "react";
//import { useSelector , useDispatch} from "react-redux";
import "./App.css";
import Start from './components/Start/Start'

import { ThemeProvider, createTheme } from '@mui/material/styles';

function  App () {
  

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });



return (
  <ThemeProvider theme={theme}>
    <div className="App">
  <Start />
   </div>
   </ThemeProvider>
  );
}

export default App;


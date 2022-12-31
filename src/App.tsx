import React, { useState } from "react";
//import { useSelector , useDispatch} from "react-redux";
import "./App.css";
import Start from './components/Start/Start'
import { Container, CssBaseline, Grid,Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { useAppSelector, useAppDispatch } from './app/hooks'


function  App () {





return (

<div className="App">

   <Start />

   

</div>

  );
}

export default App;


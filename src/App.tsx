import React ,{useState, useEffect}from "react";
//import { useSelector , useDispatch} from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Start from './components/Start/Start'
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";






function  App () {
  const [checked, setChecked] =useState(false)
  
const handelToggle = ()=>{
setChecked(!checked)
if(checked){
  localStorage.setItem("mode",   'dark'  )
}else{
  localStorage.clear();
}

  }
  useEffect(() => {
   
  //setMode((pre)=>(pre === 'light' ? 'dark' :'light'))
  }, [checked])

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode],
  // );
return (
   
    <div className="App">
      <BrowserRouter>
       <Header handelToggle={handelToggle} checked={checked}/>
        <Routes>
        <Route path="/"  element={ <Start />}> </Route>
        <Route path="/login"  element={ <Login/>}> </Route>
      </Routes>
      </BrowserRouter>
     
   </div>
  
  );
}

export default App;


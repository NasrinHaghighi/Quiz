
//import { useSelector , useDispatch} from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Start from './components/Start/Start'
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";





function  App () {
 // const [checked, setChecked] =useState(false)

  


return (
   
    <div className="App">
      <BrowserRouter>
       <Header />
        <Routes>
        <Route path="/"  element={ <Start />}> </Route>
        <Route path="/login"  element={ <Login />}> </Route>
      </Routes>
      </BrowserRouter>
     
   </div>
  
  );
}

export default App;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// interface Props{
//     name:string,
//     email?:string,
//     city?:string,
//     country?:string,
//     job?:string,

// }
interface Props{
 login:{
    name:string,
    email?:string,
   city?:string,
   country?:string,
      job?:string,
 }

}



const initialState:Props ={
 login:{
    name:'',
    email:'',
    city:'',
    country:'',
    job:''
 }
    }
interface Action{
    namefilde:string,
    value:string
}    


export const LoginSlice= createSlice({
    name:'login',
    initialState,
    reducers:{
        loginHandel:(state, action:PayloadAction<Action>)=>{
        const {namefilde, value} =action.payload
      state.login={...state.login, [namefilde]:value}
       //console.log(state)
  
        },
 
    }
})

export const {loginHandel} =LoginSlice.actions
export default LoginSlice.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Props{
    startAgain:boolean,
   
}

const initialState:Props ={
    startAgain:true
}


export const startAgainSlice= createSlice({
    name:'startAgain',
    initialState,
    reducers:{
    again:(state)=>{
        state.startAgain=false
        console.log(state.startAgain)
         },
         disAgain:(state)=>{
            state.startAgain=true
            console.log(state.startAgain)
             },
     
    }
})

export const {again, disAgain} =startAgainSlice.actions
export default startAgainSlice.reducer
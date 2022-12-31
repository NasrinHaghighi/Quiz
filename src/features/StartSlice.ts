
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Start{
    number:number,
    category:number,
  difficulty:string
}

const initialState:Start ={
    number:5, category:26, difficulty:'easy'
}


export const StartSlice= createSlice({
    name:'Start',
    initialState,
    reducers:{
        startSetupHandle:(state, action:PayloadAction<Start>)=>{
   state.category=action.payload.category
   state.difficulty=action.payload.difficulty
   state.number=action.payload.number
        },
 
    }
})

export const {startSetupHandle} =StartSlice.actions
export default StartSlice.reducer
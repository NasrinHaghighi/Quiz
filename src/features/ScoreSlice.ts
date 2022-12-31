
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Props{
    score?:number,
   
}

const initialState:Props ={
    score:0
}


export const ScoreSlice= createSlice({
    name:'Score',
    initialState,
    reducers:{
        scoreState:(state, action:PayloadAction<number>)=>{
          state.score=action.payload
          console.log(state.score)
        },
 
    }
})

export const {scoreState} =ScoreSlice.actions
export default ScoreSlice.reducer
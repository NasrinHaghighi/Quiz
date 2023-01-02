
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Props{
    score:number,
   
}

const initialState:Props ={
    score:0
}


export const ScoreSlice= createSlice({
    name:'Score',
    initialState,
    reducers:{
        scoreState:(state)=>{
          state.score +=1
        },
 
    }
})

export const {scoreState} =ScoreSlice.actions
export default ScoreSlice.reducer
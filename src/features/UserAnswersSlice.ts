
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QuestionState } from "../API";



interface InitialStateProps{
    result:QuestionState[],
  }


const initialState : InitialStateProps ={
    result: [],
 }


export const userAnswersSlice= createSlice({
    name:'userAnswers',
    initialState,
    reducers:{
        getUserAnswers:(state, action:PayloadAction<QuestionState>)=>{
        state.result=[...state.result, action.payload]
      },
    }
})

export const {getUserAnswers} =userAnswersSlice.actions
export default userAnswersSlice.reducer
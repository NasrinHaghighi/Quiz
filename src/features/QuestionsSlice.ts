
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QuestionState } from "../API";


interface InitialStateProps{
    questions:QuestionState[]
}


const initialState : InitialStateProps ={
 questions: []

}


export const QuestionsSlice= createSlice({
    name:'questions',
    initialState,
    reducers:{
        getQuestions:(state, action:PayloadAction<QuestionState[]>)=>{
        
       state.questions=action.payload
        },
 
   
        
        
    }
})

export const {getQuestions} =QuestionsSlice.actions
export default QuestionsSlice.reducer




// const initialState  ={
//   loading:false,
//   questions:[],
//   error:'',
//  }

// export const fetchQuestions=createAsyncThunk('posts/getPosts', ()=>{
//     return axios.get('https://jsonpalceholder.typicode.com/users').then((response)=>response.data)
// })
// export const QuestionsSlice= createSlice({
//     name:'posts',
//     initialState,
//     reducers:{
//     }
    
 
   
        
        
    
// })

// export const { } =QuestionsSlice.actions
// export default QuestionsSlice.reducer
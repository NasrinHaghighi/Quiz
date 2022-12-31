import {configureStore} from '@reduxjs/toolkit'
import StartSlice from '../features/StartSlice'
import QuestionsSlice from '../features/QuestionsSlice'
import ScoreSlice from '../features/ScoreSlice'
import UseAnswers from '../features/UserAnswersSlice'

export const store=configureStore({
    reducer:{
     start:StartSlice,
     questions:QuestionsSlice,
 score:ScoreSlice,
     userAnswers:UseAnswers
     

    }
})


export type RootState =ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
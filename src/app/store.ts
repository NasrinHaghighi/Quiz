import {configureStore} from '@reduxjs/toolkit'
import StartSlice from '../features/StartSlice'
import QuestionsSlice from '../features/QuestionsSlice'
import ScoreSlice from '../features/ScoreSlice'
import UseAnswers from '../features/UserAnswersSlice'
import StartAgainSlice from '../features/StartAgainSlice'
import ModeSlice from '../features/ModeSlice'
import LoginSlice from '../features/LoginSlice'

export const store=configureStore({
    reducer:{
     start:StartSlice,
     questions:QuestionsSlice,
 score:ScoreSlice,
     userAnswers:UseAnswers,
     startAgain:StartAgainSlice,
     mode:ModeSlice,
     login:LoginSlice
     

    }
})


export type RootState =ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
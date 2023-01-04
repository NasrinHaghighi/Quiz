
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Props{
    mode:boolean,
   
}

const initialState:Props ={
    mode:false
}


export const ModeSlice= createSlice({
    name:'mode',
    initialState,
    reducers:{
        changeMode:(state)=>{
         state.mode=!state.mode
         //localStorage.setItem('mode', state.mode ? 'dark' :'light')
    },
 
    }
})

export const {changeMode} =ModeSlice.actions
export default ModeSlice.reducer
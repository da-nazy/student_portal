import { createSlice } from "@reduxjs/toolkit";
const themeSlice=createSlice({
    name:'theme',
    initialState:{
        value:false,
    },
    reducers:{
        lightTheme:(state,action)=>{
            state.value=false;
        },
        darkTheme:(state)=>{
            state.value=true;
        }
    }
})

export const {lightTheme,darkTheme}=themeSlice.actions;
export default themeSlice.reducer;
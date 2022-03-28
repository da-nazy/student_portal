import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:'auth',
    initialState:{
        value:false,
    },
    reducers:{
        setAuth:(state,action)=>{
            state.value=true;
        },
        resetAuth:(state)=>{
            state.value=false;
        }
    }
})

export const {setAuth,resetAuth}=authSlice.actions;
export default authSlice.reducer;
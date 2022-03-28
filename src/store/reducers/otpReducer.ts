import { createSlice } from "@reduxjs/toolkit";
const otpSlice=createSlice({
    name:'otp',
    initialState:{
        isOtpSent:false,
        otpType:'',
    },
    reducers:{
     setOtp:(state,action)=>{

     },
     resetOtp:(state)=>{
         state.isOtpSent=false;
         state.otpType='';
     }
    }
})

export const {setOtp,resetOtp}=otpSlice.actions;
export default otpSlice.reducer;
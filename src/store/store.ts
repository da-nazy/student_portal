import {configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import authReducer from "./reducers/authReducer";
export default configureStore({
    reducer:{
        theme:themeReducer,
        auth:authReducer,
    }
})
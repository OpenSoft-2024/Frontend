import { createStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlicer";

export const store = configureStore({
    reducer:{
        AppSlice
    }
})  

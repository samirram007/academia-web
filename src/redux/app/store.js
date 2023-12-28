import {configureStore } from "@reduxjs/toolkit";
import { tokenReducer } from "../features/slice/user/User-Detail-Slice";
import { userReducer } from "../features/slice/user/User-Detail-Slice";



export const store = configureStore({
    reducer:{
        tokenReducer: tokenReducer,
        userDetail:userReducer
    }
});
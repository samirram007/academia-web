import {configureStore } from "@reduxjs/toolkit";
import { tokenReducer } from "../features/slice/user/User-Detail-Slice";
import { userReducer } from "../features/slice/user/User-Detail-Slice";
import { crumbUrlReducer } from "../features/slice/user/User-BreadCrumb-Slice";
import { childUrlReducer } from "../features/slice/user/User-BreadCrumb-Slice";


export const store = configureStore({
    reducer:{
        tokenReducer: tokenReducer,
        userDetail:userReducer,
        breadCrumbReducer: crumbUrlReducer,
        breadCrumbChildReducer: childUrlReducer,
    }
});
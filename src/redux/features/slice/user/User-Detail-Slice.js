import { createSlice } from "@reduxjs/toolkit";




const tokenInitialState = {
    token: '',
}

const userDetailInitialState = {
    userDetail: []
}

const userTokenSlice = createSlice({
    name: 'userToken',
   initialState: tokenInitialState,
    reducers:{
        saveToken : (state, action) => {
            // console.log(action);
            state.token = action.payload;
            localStorage.setItem('token',action.payload);
            return state;
        },
    }
});


const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState: userDetailInitialState,
    reducers:{
        saveUserDetail : (state, action) => {
            state.userDetail = action.payload;
            return state;
        }
    }
})


export const {saveToken} = userTokenSlice.actions;
export const {saveUserDetail} = userDetailSlice.actions;

export const tokenReducer =  userTokenSlice.reducer;
export const userReducer = userDetailSlice.reducer;

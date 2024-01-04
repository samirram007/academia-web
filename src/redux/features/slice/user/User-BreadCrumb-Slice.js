import { createSlice } from "@reduxjs/toolkit";

const breadCrumbInitialState = {
    urlName:'',
}

const breadCrumbChildLinkInitialState = {
    childUrl:''
}


const breadCrumbNameSlice = createSlice({
    name:'breadCrumb',
    initialState: breadCrumbInitialState,
    reducers:{
        saveUrlName: (state,action) =>{
            state.urlName = action.payload;
            return state;
        }
    }
});

const breadCrumbChildSlice = createSlice({
    name:'breadCrumbChild',
    initialState:breadCrumbChildLinkInitialState,
    reducers:{
        saveChildUrl:(state,action) =>{
            state.childUrl = action.payload;
            return state;
        }
    }
})



export const {saveUrlName} = breadCrumbNameSlice.actions;
export const {saveChildUrl} = breadCrumbChildSlice.actions;

export const crumbUrlReducer =  breadCrumbNameSlice.reducer;
export const childUrlReducer = breadCrumbChildSlice.reducer;
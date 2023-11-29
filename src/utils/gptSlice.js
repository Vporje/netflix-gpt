import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showToggleState:false,
    },
    reducers:{
        toggleGPTsearch:(state,actions)=>{
            state.showToggleState = !state.showToggleState;
        }
    }
});

export const {toggleGPTsearch} = gptSlice.actions;
export default gptSlice.reducer;

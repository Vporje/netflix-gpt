import { createSlice } from "@reduxjs/toolkit";

const langConfig = createSlice({
    name:"languageConfig",
    initialState:{
        changedLanguage:"en",
    },
    reducers:({
        selectedLanguage:(state,actions)=>{
            state.changedLanguage = actions.payload;
        }
    })
})

export const{selectedLanguage} = langConfig.actions;
export default langConfig.reducer;
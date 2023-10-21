import { createSlice } from "@reduxjs/toolkit";



const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchSuggestions:{}
    },
    reducers:{
        cacheResults:(state,action)=>{
            //  state.searchSuggestions=Object.assign(state.searchSuggestions,action.payload)
            state.searchSuggestions={...action.payload,...state.searchSuggestions}
        }

    }
})


export const{cacheResults}=searchSlice.actions
export default searchSlice.reducer
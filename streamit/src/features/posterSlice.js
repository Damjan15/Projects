import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedPoster: null,
    term: null,
}

const posterSlice = createSlice({
    name: "poster",
    initialState,
    reducers: {
        selectedPoster: ( state, action ) => {
            state.selectedPoster = action.payload;
        },
        searchedTerm: ( state, action ) => {
            // return {
            //     ...state,
            //     term: action.payload
            // }
            return { 
                ...state, 
                term: action.payload, 
            }

            // state.term = action.payload

            // return {
            //     ...state.term,
            //     term: action.term
            // }
        }
    
    }
});

export const { selectedPoster, searchedTerm } = posterSlice.actions;
export const selectOpenPoster = state => state.poster.selectedPoster;
export const selectOpenTerm = state => state.poster.term;
export default posterSlice.reducer;
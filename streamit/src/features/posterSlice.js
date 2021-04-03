import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedPoster: null,
    searchTerm: null,
}

const posterSlice = createSlice({
    name: "poster",
    initialState,
    reducers: {
        selectedPoster: ( state, action ) => {
            state.selectedPoster = action.payload;
        },
        searchedTerm: ( state, action ) => {
            return { ...state, searchTerm: action.searchTerm }
        }
    
    }
});

export const { selectedPoster, searchedTerm } = posterSlice.actions;
export const selectOpenPoster = state => state.poster.selectedPoster;
export const selectOpenTerm = state => state.poster.searchTerm;
export default posterSlice.reducer;
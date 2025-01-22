import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: "question",
    initialState: {
        search: '',
        difficult: '',
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setDifficulty: (state, action) => {
            state.difficult = action.payload;
        }
    }
});

export const { setSearch, setDifficulty } = questionsSlice.actions;
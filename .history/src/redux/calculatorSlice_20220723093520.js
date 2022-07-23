import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        preState: "",
        curState: "",
        input: "0",
        operator: null,
        total: false,
    },

    reducers: {
        inputNumReducer: (state, action) => {
            state.preState = action.payload.preState;
            state.curState = action.payload.curState;
            state.input = action.payload.input;
        },
    },
});

export const { inputNumReducer } = calculatorSlice.actions;
export default calculatorSlice.reducer;

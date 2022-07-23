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
            // state.input = action.payload;
            console.log(action);
        },
    },
});

export const { inputNumReducer } = calculatorSlice.actions;
export default calculatorSlice.reducer;

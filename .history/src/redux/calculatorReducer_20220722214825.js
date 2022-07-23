import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
      preState:"",
curState:"",
input:"",
operator:"",
total:"",
    },
});

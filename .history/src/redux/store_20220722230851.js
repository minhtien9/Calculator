import { configureStore } from "@reduxjs/toolkit";
// import { calculatorSlice } from "./calculatorSlice";
import calculatorReducer from "./calculatorSlice";
const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
});
export default store;

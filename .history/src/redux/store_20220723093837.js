import { configureStore } from "@reduxjs/toolkit";
// import { calculatorSlice } from "./calculatorSlice";
import calculatorReducer from "./calculatorSlice";
export default configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
});

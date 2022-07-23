import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "./calculatorSlice";

export default configureStore({
    reducer: {
        calculator: calculatorSlice,
    },
});

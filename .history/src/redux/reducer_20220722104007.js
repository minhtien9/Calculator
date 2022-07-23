import { combineReducers } from "redux";

import calculatorReducer from "../App";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
});
export default rootReducer;

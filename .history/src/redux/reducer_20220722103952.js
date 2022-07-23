import { combineReducers } from "redux";

import calculator from "../App";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
});
export default rootReducer;

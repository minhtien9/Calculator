import { combineReducers } from "redux";

import calculator from "../App";

const rootReducer = (combineReducers) => {
    return {
        calculator: calculator(state.filters, action),
    };
};
export default rootReducer;

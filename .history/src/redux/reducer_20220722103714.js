import { combineReducers } from "redux";

import calculator from "../App";

const rootReducer = (state = {}, action) => {
    return {
        calculator: calculator(state.filters, action),
    };
};
export default rootReducer;

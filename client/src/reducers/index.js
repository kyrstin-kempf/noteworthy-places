import { combineReducers } from 'redux';

import counterReducer from "./counter";
import toggleGreetingReducer from "./greeting";
import placesReducer from "./places";

const rootReducer = combineReducers({
    counter: counterReducer,
    greeting: toggleGreetingReducer,
    places: placesReducer,
});

export default rootReducer;
import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import postReducer from "./post";
import {combineReducers} from 'redux';
const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    posts: postReducer
})
export default allReducer;
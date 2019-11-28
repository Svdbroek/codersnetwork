// src/store/reducer.js
import { combineReducers } from "redux";
import developersReducer from "./developers/reducer"
import postReducer from "./post/reducer"
import loginReducer from "./Login/reducer"


export default combineReducers({
    developers: developersReducer,
    posts: postReducer,
    login: loginReducer,
}
);
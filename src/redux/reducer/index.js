import { combineReducers } from "redux";
import login from "./login";

const createRootReducer = () => combineReducers({
    login: login
});

export default createRootReducer;
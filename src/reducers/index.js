import { combineReducers } from "redux";
import tasks from "./tasks";
import filter from "./filters";
import lang from "./lang";

const rootReducer = combineReducers({ tasks, filter, lang });

export default rootReducer;

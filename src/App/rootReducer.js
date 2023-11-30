import { combineReducers } from "redux";
import headerSlice from "../features/headerSlice";
import todoSlice from "../features/todoSlice";

const rootReducer = combineReducers({
  header: headerSlice,
  todo: todoSlice
 });

export default rootReducer;

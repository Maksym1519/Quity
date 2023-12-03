import { combineReducers } from "redux";
import headerSlice from "../features/headerSlice";
import todoSlice from "../features/todoSlice";
import postSlice from "../features/postSlice";

const rootReducer = combineReducers({
  header: headerSlice,
  todo: todoSlice,
  post: postSlice
 });

export default rootReducer;

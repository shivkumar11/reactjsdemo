import { combineReducers } from "redux";
import roleReducer from "./role";

const rootReducer = combineReducers({
  roleApp: roleReducer,
});

export default rootReducer;

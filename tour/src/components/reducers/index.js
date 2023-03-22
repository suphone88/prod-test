import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

export const reducers = combineReducers({
  dataDivision: dataReducer,
});
export default reducers;

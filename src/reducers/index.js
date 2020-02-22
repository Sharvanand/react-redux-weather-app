import { combineReducers } from "redux";
import weatherListReducer from "./weatherListReducer";

export const rootReducer = combineReducers({
  weatherList: weatherListReducer
});

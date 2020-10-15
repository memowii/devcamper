import { combineReducers } from "redux";
import { bootcampsReducer } from "./bootcampsReducer";
import { reviewsReducer } from "./reviewsReducer";

export default combineReducers({
  bootcampsReducer,
  reviewsReducer,
});

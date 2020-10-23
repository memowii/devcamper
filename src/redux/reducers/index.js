import { combineReducers } from "redux";
import { bootcampsReducer } from "./bootcampsReducer";
import { reviewsReducer } from "./reviewsReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  bootcampsReducer,
  reviewsReducer,
  authReducer,
});

import { combineReducers } from "redux";
import { bootcampsReducer } from "./bootcampsReducer";
import { reviewsReducer } from "./reviewsReducer";
import { usersReducer } from "./usersReducer";

export default combineReducers({
  bootcampsReducer,
  reviewsReducer,
  usersReducer,
});

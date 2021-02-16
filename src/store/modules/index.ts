import { combineReducers } from "redux";
import { calendar } from "./calendar";
import { modal } from "./modal";
import { todo } from "./todo";

const rootReducer = combineReducers({
  calendar,
  modal,
  todo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

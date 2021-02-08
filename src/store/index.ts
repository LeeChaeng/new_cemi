import { createStore, createReducer } from "@reduxjs/toolkit";
import rootReducer from "./modules";

// **** 리덕스 개발자도구 적용
const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

export default store;

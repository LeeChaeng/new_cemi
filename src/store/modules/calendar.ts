import { createReducer } from "@reduxjs/toolkit";
import { get35day } from "./get35Day";

const initialState = {
  days: get35day(),
};

export const calendar = createReducer(initialState, {});

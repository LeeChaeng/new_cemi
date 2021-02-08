import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  date: new Date(),
};

export const calendar = createReducer(initialState, {});

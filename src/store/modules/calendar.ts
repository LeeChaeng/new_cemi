import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { add, sub } from "date-fns";

const PREV = "calendar/PREV" as const;
const NEXT = "calendar/NEXT" as const;

export const prevMonth = () => ({ type: PREV });
export const nextMonth = () => ({ type: NEXT });

type CalendarAction =
  | ReturnType<typeof prevMonth>
  | ReturnType<typeof nextMonth>;

const initialState = {
  selectedDate: new Date(),
};

export const calendar = (state = initialState, action: CalendarAction) => {
  switch (action.type) {
    case PREV:
      console.log("action prev");
      return { selectedDate: sub(state.selectedDate, { months: 1 }) };
    case NEXT:
      console.log("action next");
      return { selectedDate: add(state.selectedDate, { months: 1 }) };
    default:
      return state;
  }
};

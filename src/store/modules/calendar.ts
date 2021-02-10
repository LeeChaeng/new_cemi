import { add, sub } from "date-fns";

const PREV = "calendar/PREV" as const;
const TODAY = "calendar/TODAY" as const;
const NEXT = "calendar/NEXT" as const;
const CHANGE = "calendar/CHANGE" as const;

export const prevMonth = () => ({ type: PREV });
export const thisMonth = () => ({ type: TODAY });
export const nextMonth = () => ({ type: NEXT });
export const changeDate = (id: number) => ({ type: CHANGE, id: id });

type CalendarAction =
  | ReturnType<typeof prevMonth>
  | ReturnType<typeof thisMonth>
  | ReturnType<typeof nextMonth>
  | ReturnType<typeof changeDate>;

const initialState = {
  selectedDate: new Date(),
};

export const calendar = (state = initialState, action: CalendarAction) => {
  switch (action.type) {
    case PREV:
      console.log("action prev");
      return { selectedDate: sub(state.selectedDate, { months: 1 }) };
    case TODAY:
      console.log("today");
      return { selectedDate: new Date() };
    case NEXT:
      console.log("action next");
      return { selectedDate: add(state.selectedDate, { months: 1 }) };
    case CHANGE:
      console.log("change state");
      return { selectedDate: new Date(action.id) };
    default:
      return state;
  }
};

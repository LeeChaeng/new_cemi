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
  visibleDate: new Date(),
};

export const calendar = (state = initialState, action: CalendarAction) => {
  switch (action.type) {
    case PREV:
      return { ...state, visibleDate: sub(state.visibleDate, { months: 1 }) };
    case TODAY:
      return { visibleDate: new Date(), selectedDate: new Date() };
    case NEXT:
      return { ...state, visibleDate: add(state.visibleDate, { months: 1 }) };
    case CHANGE:
      return {
        visibleDate: new Date(action.id),
        selectedDate: new Date(action.id),
      };
    default:
      return state;
  }
};

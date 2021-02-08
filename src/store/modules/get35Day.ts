import { getDay, getDaysInMonth } from "date-fns";

const getPreviousMonth = () => {
  let date = new Date();
  let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  let lastDay = new Date(
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1)
  );

  return lastDay;
};

export const get35day = (today = new Date()) => {
  let prev_days: Array<number> = [];
  let current_days: Array<number> = [];
  let next_days: Array<number> = [];

  const start_date = getDay(new Date(today.getFullYear(), today.getMonth(), 1));

  const prev_month = getPreviousMonth().getMonth();
  let prev_allDays = getDaysInMonth(prev_month) - start_date;

  for (let i = 0; i < start_date; i++) {
    prev_days.push(prev_allDays);
    prev_allDays++;
  }

  for (let i = 1; i <= getDaysInMonth(today); i++) {
    current_days.push(i);
  }

  const next_month_count = 35 - prev_days.length - current_days.length;
  for (let i = 1; i <= next_month_count; i++) {
    next_days.push(i);
  }

  return [prev_days, current_days, next_days].flat(1);
};

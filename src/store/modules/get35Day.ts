import { add, getDay, getDaysInMonth, sub } from "date-fns";

export const get35day = (today: Date) => {
  let prev_days: Array<number> = [];
  let current_days: Array<number> = [];
  let next_days: Array<number> = [];

  let result: Array<Object> = [];

  const start_date = getDay(new Date(today.getFullYear(), today.getMonth(), 1));

  let prev_allDays = getDaysInMonth(sub(today, { months: 1 })) - start_date + 1; //저번 달의 모든 날의 수

  for (let i = 0; i < start_date; i++) {
    let prev = sub(today, { months: 1 });
    let date = new Date(prev.getFullYear(), prev.getMonth(), prev_allDays);

    let temp = {
      id: date.getTime(),
      date,
    };
    result.push(temp);
    prev_days.push(prev_allDays);
    prev_allDays++;
  }

  for (let i = 1; i <= getDaysInMonth(today); i++) {
    let date = new Date(today.getFullYear(), today.getMonth(), i);
    let temp = {
      id: date.getTime(),
      date,
    };
    result.push(temp);
    current_days.push(i);
  }

  let next_month_count = 35 - prev_days.length - current_days.length;
  for (let i = 1; i <= next_month_count; i++) {
    let next = add(today, { months: 1 });
    let date = new Date(next.getFullYear(), next.getMonth(), i);
    let temp = {
      id: date.getTime(),
      date,
    };
    result.push(temp);
    next_days.push(i);
  }

  if (result.length > 35) {
    next_month_count = 42 - result.length;
    for (let i = 1; i <= next_month_count; i++) {
      let next = add(today, { months: 1 });
      let date = new Date(next.getFullYear(), next.getMonth(), i);
      let temp = {
        id: date.getTime(),
        date,
      };
      result.push(temp);
      next_days.push(i);
    }
  }

  return result;
};

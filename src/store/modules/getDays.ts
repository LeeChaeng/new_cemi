import { add, getDay, getDaysInMonth, sub } from "date-fns";

type Day = {
  id: number;
  date: Date;
};

export const getDays = (today: Date) => {
  let result: Array<Day> = [];

  const start_date = getDay(new Date(today.getFullYear(), today.getMonth(), 1));
  let prev_allDays = getDaysInMonth(sub(today, { months: 1 })) - start_date + 1; //화면에 보여줄 저번달의 첫날

  for (let i = 0; i < start_date; i++) {
    let prev = sub(today, { months: 1 });
    let date = new Date(prev.getFullYear(), prev.getMonth(), prev_allDays);

    let temp = {
      id: date.getTime(),
      date,
    };
    result.push(temp);
    prev_allDays++;
  }

  for (let i = 1; i <= getDaysInMonth(today); i++) {
    let date = new Date(today.getFullYear(), today.getMonth(), i);
    let temp = {
      id: date.getTime(),
      date,
    };
    result.push(temp);
  }

  let next_month_count = 35 - result.length;
  for (let i = 1; i <= next_month_count; i++) {
    let next = add(today, { months: 1 });
    let date = new Date(next.getFullYear(), next.getMonth(), i);
    let temp = {
      id: date.getTime(),
      date,
    };
    result.push(temp);
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
    }
  }

  return result;
};

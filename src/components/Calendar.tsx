import format from "date-fns/format";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import {
  nextMonth,
  thisMonth,
  prevMonth,
  changeDate,
} from "../store/modules/calendar";
import { getDays } from "../store/modules/getDays";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const dispatch = useDispatch();
  const goPrevMonth = () => {
    dispatch(prevMonth());
  };
  const goToday = () => {
    dispatch(thisMonth());
  };
  const goNextMonth = () => {
    dispatch(nextMonth());
  };
  const days: Array<any> = getDays(selectedDate);

  const onDateClick = (event: any) => {
    let {
      target: { id },
    } = event;
    let current = document.getElementById(selectedDate.getTime().toString());
    if (current) {
      current.className = "item";
    }
    dispatch(changeDate(parseInt(id)));
    let select = document.getElementById(id);
    if (select) {
      select.className = "item select";
    }
  };

  return (
    <Box>
      <Title>
        <div className="title">{format(selectedDate, "MMMM, yyyy")}</div>
        <Button>
          <button onClick={goPrevMonth}>{"<"}</button>
          <button onClick={goToday}>{"today"}</button>
          <button onClick={goNextMonth}>{">"}</button>
        </Button>
      </Title>
      <Weekend>
        {DAYS.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </Weekend>
      <div>
        <Container>
          {days.map((item) => (
            <div
              className="item"
              key={item.id}
              id={item.id}
              onClick={onDateClick}
            >
              {item.date.getDate()}
            </div>
          ))}
        </Container>
      </div>
    </Box>
  );
};

const Box = styled.div`
  flex: 3;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 32px;
  & > .title {
    font-size: 23px;
    font-family: "Bold";
    color: #f2702f;
  }
`;
const Button = styled.div`
  button {
    border-radius: 50px;
    border: none;
    margin-right: 5px;
  }
`;

const Container = styled.div`
  display: grid;
  height: 500px;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(100px, auto);
  border-left: solid 1px #f0f1f1;
  border-bottom: solid 2px #f0f1f1;
  & > .item {
    border: solid 1px #f0f1f1;
    padding-top: 5px;
  }
  & > .item:nth-child(7n) {
    border-right: none;
  }
  & > .select {
    color: #f2702f;
  }
`;

const Weekend = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: #5e647b;
  height: 40px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  border: solid 2px #f0f1f1;
  border-bottom: solid 1px #f0f1f1;
  border-right: none;
`;

export default Calendar;

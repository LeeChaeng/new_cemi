import { isSameDay } from "date-fns";
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
import { getDays } from "../static/getDays";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const visibleDate = useSelector(
    (state: RootState) => state.calendar.visibleDate
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
  const days = getDays(visibleDate);

  const onDateClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const {
      currentTarget: { id },
    } = event;
    dispatch(changeDate(parseInt(id)));
  };

  return (
    <Box>
      <Title>
        <div className="title">{format(visibleDate, "MMMM, yyyy")}</div>
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
            <Day
              key={item.id}
              id={item.id.toString()}
              onClick={onDateClick}
              selected={isSameDay(selectedDate, item.date)}
            >
              {item.date.getDate()}
            </Day>
          ))}
        </Container>
      </div>
    </Box>
  );
};

const Box = styled.div`
  flex: 3;
  text-align: center;
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
`;

const Day = styled.div<{ selected: boolean }>`
  border: solid 1px #f0f1f1;
  padding-top: 5px;
  &:nth-child(7n) {
    border-right: none;
  }
  color: ${(props) => props.selected && "#f2702f"};
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

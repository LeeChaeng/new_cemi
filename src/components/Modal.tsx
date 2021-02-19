import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import { switchModal } from "../store/modules/modal";
import { addTodo } from "../store/modules/todo";

const HOURS = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const Modal = () => {
  const [deadLine, setDeadLine] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [deadLineValue, setDeadLineValue] = useState("");

  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const addDeadLine = () => {
    setDeadLine(true);
    setDeadLineValue(HOURS[0]);
  };
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(switchModal());
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setInputValue(value);
  };
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setDeadLineValue(value);
  };
  const onSubmit = () => {
    if (inputValue !== "") {
      dispatch(addTodo(selectedDate.getTime(), inputValue, deadLineValue));
    }
    setInputValue("");
    setDeadLineValue("");
    dispatch(switchModal());
  };

  return (
    <Container>
      <Overlay onClick={showModal}></Overlay>
      <Content>
        <span className="exit" onClick={showModal}>
          X
        </span>
        <input
          id="todo"
          type="text"
          placeholder="Enter your to do"
          onChange={onInputChange}
          value={inputValue}
        ></input>
        {deadLine ? (
          <select id="deadline" value={deadLineValue} onChange={onSelectChange}>
            {HOURS.map((hour, idx) => (
              <option key={idx} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        ) : (
          <DeadLine onClick={addDeadLine}>
            <span>+</span>
            <span>Add deadline</span>
          </DeadLine>
        )}
        <Submit onClick={onSubmit}>Submit</Submit>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Content = styled.div`
  width: 25%;
  position: relative;
  padding: 20px;
  background-color: white;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .exit {
    margin-left: 90%;
    cursor: pointer;
  }
  & > input {
    border: none;
    border-bottom: 2px solid lightgray;
    width: 60%;
    font-size: 15px;
    outline: none;
  }
  & > select {
    margin: 10px 0px;
    border: none;
    border-bottom: 2px solid lightgray;
    outline: none;
  }
`;

const DeadLine = styled.div`
  display: flex;
  margin: 10px 0px;
  font-size: 12px;
  cursor: pointer;
  & > span {
    margin-right: 10px;
  }
`;

const Submit = styled.button`
  border: none;
  padding: 5px 20px;
  outline: none;
  cursor: pointer;
`;

export default Modal;

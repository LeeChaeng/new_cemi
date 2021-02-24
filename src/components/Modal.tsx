import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import { clearTarget, switchModal } from "../store/modules/modal";
import { addTodo, updateTodo } from "../store/modules/todo";

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
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const targetValue = useSelector((state: RootState) => state.modal.todo);

  const [deadLine, setDeadLine] = useState(
    targetValue.deadline === "" ? false : true
  );
  const [inputValue, setInputValue] = useState(
    targetValue.text === "" ? "" : targetValue.text
  );
  const [deadLineValue, setDeadLineValue] = useState(targetValue.deadline);

  const addDeadLine = () => {
    setDeadLine(true);
    setDeadLineValue(HOURS[0]);
  };
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(switchModal());
    dispatch(clearTarget());
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

  const onUpdate = () => {
    dispatch(updateTodo(targetValue.id, inputValue, deadLineValue));
    dispatch(switchModal());
    dispatch(clearTarget());
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
          x
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
        {targetValue.id !== "" ? (
          <Button onClick={onUpdate}>update</Button>
        ) : (
          <Button onClick={onSubmit}>Submit</Button>
        )}
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
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Content = styled.div`
  width: 35%;
  height: 170px;
  position: relative;
  padding: 10px;
  background-color: white;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .exit {
    margin-left: 95%;
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
    color: #e3535a;
  }
  & > input {
    border: none;
    border-bottom: 1.8px solid gray;
    width: 70%;
    font-size: 25px;
    outline: none;
  }

  & > input::placeholder {
    font-style: italic;
    color: #e3535a;
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
  font-size: 14px;
  font-family: "SCDream_normal";
  cursor: pointer;
  & > span {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 2px 12px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 13px;
  font-family: "SCDream_bold";
  color: white;
  background-color: #e3535a;
`;

export default Modal;

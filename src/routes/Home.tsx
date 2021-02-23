import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import Modal from "../components/Modal";
import TodoList from "../components/TodoList";
import { RootState } from "../store/modules";

const Home = () => {
  const addModalOn = useSelector((state: RootState) => state.modal.addModalOn);
  return (
    <Container>
      <Calendar />
      <TodoList />
      {addModalOn && <Modal />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 0px 50px;
  border-radius: 40px 0px 40px 40px;
  border: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
  min-width: 700px;
  width: calc(100vw - 120px);
`;
export default Home;

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
`;
export default Home;

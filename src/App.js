import React from "react";
import styled from "styled-components";
import Logo from "./componentes/Logo";
import Rodape from "./componentes/Rodape"
import Flashcards from "./componentes/Flashcard";

function App() {
  return (
    <>
      <ScreenContainer>
        <Logo />
        <Flashcards/>
        <Rodape />
      </ScreenContainer>
    </>
  );
}

export default App;

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 100px;`

import React from "react";
import styled from "styled-components";
import Logo from "./componentes/Logo";
import Rodape from "./componentes/Rodape"
import Flashcards from "./componentes/Flashcard";
import {useState} from "react"

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <ScreenContainer>
        <Logo />
        <Flashcards 
        contador={contador}
        setContador={setContador}/>
        <Rodape
          contador={contador} />
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

import React from "react";
import styled from "styled-components";

function Flashcards() {
    const cards = [
        { number: "1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { number: "2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { number: "3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { number: "4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { number: "5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { number: "6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { number: "7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { number: "8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return (
        <>
            {cards.map((objeto) =>
                <PerguntaFechada>
                    <p>Pergunta {objeto.number}</p>
                    <img src="../img/seta_play.png" />
                </PerguntaFechada>)}
        </>
    );
}

export default Flashcards

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
      }
    `
const PerguntaAberta = styled.div`
    width: 300px;
    height: 135px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        }
        `
const ConteinerBotão = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 10px;
    right: 10px;
    button{
    width:90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    }
    `
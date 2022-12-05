import React from "react";
import styled from "styled-components";
import { useState } from "react";
import setaPlay from '../img/seta_play.png'
import setaVirar from '../img/seta_virar.png'
import iconeCerto from '../img/icone_certo.png'
import iconeErro from '../img/icone_erro.png'
import iconeQuase from '../img/icone_quase.png'

function Flashcards({ setContador, contador }) {
    let cards = [
        { img: setaPlay, aberto: false, number: "1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { img: setaPlay, aberto: false, number: "2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { img: setaPlay, aberto: false, number: "3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { img: setaPlay, aberto: false, number: "4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { img: setaPlay, aberto: false, number: "5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { img: setaPlay, aberto: false, number: "6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { img: setaPlay, aberto: false, number: "7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { img: setaPlay, aberto: false, number: "8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]
    const [aberto, setAberto] = useState(false);
    const [virado, setVirado] = useState(false);
    const [allCards, setAllCards] = useState(cards);

    function Jogar(objeto) {
        console.log(objeto.imagem)
        let updatedCards = allCards
        updatedCards[objeto.number - 1] = { ...objeto, aberto: true }
        setAllCards(updatedCards);
        setAberto(true)
    }

    function Virar() {
        setVirado(true)
    }
    function Respondeu1(objeto) {
        let updatedCards = allCards
        updatedCards[objeto.number - 1] = { ...objeto,img:iconeErro, aberto: false }
        setAberto(false)
        setVirado(false)
        setAllCards(updatedCards);
        setContador(contador + 1)
    }
    function Respondeu2(objeto) {
        let updatedCards = allCards
        setAberto(false)
        setVirado(false)
        updatedCards[objeto.number - 1] = { ...objeto,objeto,img:iconeQuase, aberto: false }
        setAllCards(updatedCards);
        setContador(contador + 1)
    }

    function Respondeu3(objeto) {
        let updatedCards = allCards
        setAberto(false)
        setVirado(false)
        updatedCards[objeto.number - 1] = { ...objeto,objeto,img:iconeCerto, aberto: false }
        setAllCards(updatedCards);
        setContador(contador + 1)
    }

    return (
        <>
            {allCards.map((objeto) => {
                if (!objeto.aberto) {
                    return (
                        <PerguntaFechada data-test="flashcard">
                            <p data-test="flashcard-text" >Pergunta {objeto.number}</p>
                            <img data-test="play-b" disabled={objeto.img === setaPlay} onClick={() => Jogar(objeto)} src={objeto.img} />
                        </PerguntaFechada>
                    )
                }
                else if (!virado && aberto) {
                    return (
                        <PerguntaAberta data-test="flashcard">
                            <p>{objeto.question}</p>
                            <img data-test="turn-btn" disabled={objeto.disable === true} onClick={Virar} src={setaVirar} />
                        </PerguntaAberta>)
                }

                else if (virado) {
                    return (
                        <PerguntaAberta data-test="flashcard">
                            {objeto.answer}
                            <ConteinerBotão>
                                <button data-test="no-btn" onClick={() => Respondeu1(objeto)} >Não lembrei</button>
                                <button data-test="partial-btn" onClick={() => Respondeu2(objeto)}  >Quase não lembrei</button>
                                <button data-test="zap-btn" onClick={() => Respondeu3(objeto)} >Zap!</button>
                            </ConteinerBotão>
                        </PerguntaAberta>
                    )
                }
            })}
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
                font - family: 'Recursive';
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
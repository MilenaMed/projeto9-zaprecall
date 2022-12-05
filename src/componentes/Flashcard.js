import React from "react";
import styled from "styled-components";
import { useState } from "react";
import setaVirar from '../img/seta_virar.png'
import iconeCerto from '../img/icone_certo.png'
import iconeErro from '../img/icone_erro.png'
import iconeQuase from '../img/icone_quase.png'
import cards from "./cards";

function Flashcards({ setContador, contador }) {

    const [aberto, setAberto] = useState(false);
    const [virado, setVirado] = useState(false);
    const [allCards, setAllCards] = useState(cards);
    const [dataTest, setDataTest] = useState("play-b");

    function Jogar(objeto) {
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
        updatedCards[objeto.number - 1] = { ...objeto, riscar:"line-through", img: iconeErro, color: "#FF3030", aberto: false }
        setAllCards(updatedCards);
        setDataTest("no-icon")
        Setar()
    }
    function Respondeu2(objeto) {
        let updatedCards = allCards
        updatedCards[objeto.number - 1] = { ...objeto, riscar:"line-through", img: iconeQuase, color: "#FF922E", aberto: false }
        setAllCards(updatedCards);
        setDataTest("partial-icon")
        Setar()
    }

    function Respondeu3(objeto) {
        let updatedCards = allCards
        updatedCards[objeto.number - 1] = { ...objeto, riscar:"line-through", img: iconeCerto,color: "#2FBE34", aberto: false }
        setAllCards(updatedCards);
        setDataTest("zap-icon")
        Setar()
    }

    function Setar() {
        setAberto(false)
        setVirado(false)
        setContador(contador + 1)
    }

    return (
        <>
            {allCards.map((objeto) => {
                if (!objeto.aberto) {
                    return (
                        <PerguntaFechada cor={objeto.color} riscar={objeto.riscar}>
                            <p data-test="flashcard-text" >Pergunta {objeto.number}</p>
                            <img data-test={dataTest} onClick={() => Jogar(objeto)} src={objeto.img} />
                        </PerguntaFechada>
                    )
                }
                else if (!virado && aberto) {
                    return (
                        <PerguntaAberta data-test="flashcard">
                            <p>{objeto.question}</p>
                            <img data-test="turn-btn" onClick={Virar} src={setaVirar} />
                        </PerguntaAberta>)
                }

                else if (virado) {
                    return (
                        <PerguntaAberta data-test="flashcard">
                            {objeto.answer}
                            <ConteinerBotão>
                                <Botão data-test="no-btn" color="#FF3030" onClick={() => Respondeu1(objeto)} >Não lembrei</Botão>
                                <Botão data-test="partial-btn" color="#FF922E" onClick={() => Respondeu2(objeto)}  >Quase não lembrei</Botão>
                                <Botão data-test="zap-btn" color="#2FBE34" onClick={() => Respondeu3(objeto)} >Zap!</Botão>
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
                color: ${props => props.cor};
                text-decoration:${props => props.riscar};
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
            `
            const Botão = styled.button`
                width:90px;
                font-family: 'Recursive';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                background: ${props => props.color};
                border-radius: 5px;
                border: 1px solid ${props => props.color};;
                padding:5px;
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: center;
                text-align: center;
            `
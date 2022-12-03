import React from "react";
import styled from "styled-components";

function Rodape() {
    return (
        <StyleRodape data-test="footer">
            0/4 concluidos
        </StyleRodape>
    );
}

export default Rodape

const StyleRodape = styled.div`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`
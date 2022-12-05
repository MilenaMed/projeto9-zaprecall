import React from "react";
import styled from "styled-components";
import logo from '../img/logo.png'

function Logo() {
    return (
        <StyledLogoConteiner>
            <img src={logo}/>
            <StyledLogoH1>ZAP RECALL</StyledLogoH1>
        </StyledLogoConteiner>
    )
}

export default Logo

const StyledLogoConteiner = styled.div`
    display: flex;
    align-items: center; 
    margin: 40px 0 20px 0;

    img{
     width: 52px;
    }
`
const StyledLogoH1 = styled.div`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #F6F6F6;
    margin-left: 20px;
`
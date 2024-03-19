import styled, { keyframes } from "styled-components";

export const DivInicial = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    


    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.38rem;
    margin-left: 3.12rem;

    @media (max-width: 882px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 0;
        margin-left: 1.2rem;
        margin-top: 2rem;
    }
    @media (max-width: 430px){
        margin-left: 3.7rem;
    }

    
`
export const DivTextos = styled.div`
    width: 34.12rem;
    height: 17.37rem;


    @media (max-width: 882px){
       width: 100%;
       text-align: center;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }

    @media (max-width: 430px){
        height: 100%;
    }

`
export const MeuNome = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    background: #5222D0;
    background-clip: text;
    color: transparent;
    margin-top: -10px;
    cursor: pointer;

    @media (max-width: 882px){
        font-size: 3.2rem;
    }

    @media (max-width: 430px){
        font-size: 3rem;
    }
    
    
`

export const TituloProfissao = styled.p`
    font-family: "Tinos", serif;
    font-size: 1.25rem;
    color: #151717;
    margin-top: -2.1rem;
    cursor: pointer;
`

export const Descricao = styled.p`
    color: #1F2626;
    font-family: "Montserrat", sans-serif;
    margin-top: -2rem;
    font-size: 1rem;
    margin-bottom: 1.9rem;
    @media (max-width: 882px){
        width: 90%;
        
    }

    @media (max-width: 430px){
        font-size: 1.3rem;
    }
`



export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;

    @media (max-width: 882px){
        margin-bottom: 2rem;
    }

    @media (max-width: 430px){
        margin-bottom: 2rem;
    }
    @media (max-width: 289px){
        margin-bottom: 2rem;
        z-index: 2;
    }
`
export const ImagemBanner = styled.img`

`
export const wiggle = keyframes`
    0%, 7% {
        transform: rotateZ(0);
    }
    15% {
        transform: rotateZ(-15deg);
    }
    20% {
        transform: rotateZ(10deg);
    }
    25% {
        transform: rotateZ(-10deg);
    }
    30% {
        transform: rotateZ(6deg);
    }
    35% {
        transform: rotateZ(-4deg);
    }
    40%, 100% {
        transform: rotateZ(0);
    }
`

export const ImagemSeta = styled.img`
    height: 55px;
    position: absolute;
    top: 600px;
    animation: ${wiggle} 2s linear infinite;

    @media (max-width: 882px){
       display: none;
    }
`

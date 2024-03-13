import styled, { keyframes } from "styled-components";

export const DivInicial = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.38rem;
    margin-left: 3.12rem;
`
export const DivTextos = styled.div`
    width: 34.12rem;
    height: 17.37rem;
`
export const MeuNome = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    background: #5222D0;
    background-clip: text;
    color: transparent;
    margin-top: -10px;
    cursor: pointer;
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
`



export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem
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
`

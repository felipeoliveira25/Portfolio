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
    background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,171,208,1) 0%, rgba(9,9,121,1) 0%, rgba(5,179,136,1) 0%);
    background-clip: text;
    color: transparent;
    margin-top: -10px;
    cursor: pointer;
`

export const TituloProfissao = styled.p`
    font-family: "Tinos", serif;
    font-size: 1.25rem;
    color: #D7E5EC;
    margin-top: -2.1rem;
    cursor: pointer;
`

export const Descricao = styled.p`
    color: #BDEBEA;
    font-family: "Montserrat", sans-serif;
    margin-top: -0.7rem;
    font-size: 1rem;
    margin-bottom: 1.9rem;
`

export const BotaoContato = styled.a`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,171,208,1) 0%, rgba(9,9,121,1) 0%, rgba(5,179,136,1) 0%);
    border-radius: 6px;
    border: none;
    padding: 10px;
    color: #252728;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    box-shadow: #32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px;

    &:hover{
        box-shadow: rgba(5,179,136,1)  3px 2px 10px 0px, rgba(5,179,136,1) -3px -2px 10px 0px;

    }
`

export const DivImg = styled.div`

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

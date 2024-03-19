import styled from "styled-components";

export const DivAboutMe = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 7.5rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 882px){
        width: 100%;
    }
    @media (max-width: 430px){
        margin-left: 3rem;
    }
`

export const Title = styled.h3`
    font-size: 1.5rem;
    color: #151717;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 1rem;
    cursor: pointer;
    width:80%;
    word-break: keep-all;
    display: flex;
    justify-content: center;
    

    @media (max-width: 882px){
        width: 80%;
        
    }
`

export const Paragraph = styled.p`
    width: 52.1rem;
    font-size: 1.12rem;
    color: #1F2626;
    font-family: "Montserrat", sans-serif;
    border-left: 5px solid #5222D0;
    padding-left: 1.2rem;
    cursor: text;

    @media (max-width: 882px){
        width: 70%;
        font-size: 1.2rem;
        font-weight: 500;
    }
`
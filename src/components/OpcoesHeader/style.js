import styled from "styled-components";

export const Lista = styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    display: flex;
    list-style: none;
    font-family: "Montserrat", sans-serif;
    color: #1F2626;
    gap: 70px;
    justify-content: center;
    align-items: center;
`
export const Opcao = styled.li`
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    &:hover{
        border-bottom: 1px solid #5222D0 ;
    }
`

export const BotaoDarkMode = styled.input`

`

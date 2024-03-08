import styled from "styled-components";

export const Lista = styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    display: flex;
    list-style: none;
    font-family: "Montserrat", sans-serif;
    color: #BDEBEA;
    gap: 70px;
    justify-content: center;
    align-items: center;
`
export const Opcao = styled.li`
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;

    &:hover{
        border-bottom: 1px solid #70cfce ;
    }
`
export const OpcaoContato = styled.li`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,171,208,1) 0%, rgba(9,9,121,1) 0%, rgba(5,179,136,1) 0%);
    border-radius: 6px;
    border: none;
    padding: 10px;
    color: #252728;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        box-shadow: rgba(5,179,136,1)  3px 2px 10px 0px, rgba(5,179,136,1) -3px -2px 10px 0px;
        transition: all 0.8s ;
    }
`
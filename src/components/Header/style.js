import styled from "styled-components";

export const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FAFAFA;
    position: fixed;
    width: 100vw;
    z-index: 2;
    top: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const DivLogo = styled.div`
    display: flex;
    margin-left: 40px;
`

export const LogoTexto = styled.a`
    font-size: 20px;
    color: #1F2626;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
`

export const LogoPersonalizada = styled.span`
    color: #5222D0;
`
export const Lista = styled.ul`
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
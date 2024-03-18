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

    @media (max-width: 1024px) {
        padding: 0 2rem;
        justify-content: center;
        position: fixed;
        
    }
    @media (max-width: 1440px) {
        padding: 0 2rem;
        justify-content: center;
        position: fixed;
        gap: -20rem;
    }
    @media (max-width: 777px) {
        width: 100vw;
    }
    @media (max-width: 680px) {
        width: 680px;
    }


   
`


export const LogoTexto = styled.a`
    font-size: 20px;
    color: #1F2626;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    width: 30vw;
    

    @media (max-width: 1024px) {
        margin-right: -8rem;
        margin-left: -10rem;
    }
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
    @media (max-width: 425px){
        display: none;
        
    }
    @media (max-width: 1024px) {
        gap: 50px;
        margin-left: 5rem;
        margin-right: -7rem;
    }
`
export const Opcao = styled.li`
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    &:hover{
        border-bottom: 1px solid #5222D0 ;
    }
`
export const BotaoMenu = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    
    align-items: flex-end;
    justify-content: center;
    border: none;
    border-radius: 0.4rem;
    color: #1F2626;
    background-color: transparent;
    line-height: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    display: none;

     @media (max-width: 425px){
        display: block;
        margin-left: 25rem;
        
    } 

`
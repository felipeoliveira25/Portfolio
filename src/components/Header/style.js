import styled from "styled-components";

export const HeaderDiv = styled.header`
    display: flex;
    justify-content: center;
    gap: 15rem;
    align-items: center;
    background-color: #FAFAFA;
    position: fixed;
    width: 100vw;
    z-index: 4;
    top: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 1024px) {
        gap: 4rem;
        
    }
    @media (max-width: 882px) {
        width: 100%;
        gap: 0.5rem;
    }
   
    @media (max-width: 626px){
        width: 100%;
        gap: 0;
        justify-content: flex-start;
        padding-left: 3.8rem;
    }
    @media (max-width: 560px){
        gap: 0;
        padding-left: 0;
        justify-content: space-around;
        width: 100%;
        height: 5rem;
    }
   

   
`


export const LogoTexto = styled.a`
    font-size: 20px;
    color: #1F2626;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;



    @media (max-width: 560px){
        font-size: 25px;
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
    gap: 4.38rem;
    justify-content: center;
    align-items: center;
    @media (max-width: 560px){
        display: none;
        width: 100%;
        
    }
    @media (max-width: 1024px) {
        gap: 3.12rem;
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

     @media (max-width: 560px){
        display: block;
        
        
        
      
        
    } 

`
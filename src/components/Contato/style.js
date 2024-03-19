import styled from "styled-components";


export const DivContato = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8rem;

    @media (max-width: 430px){
        margin-left: 1rem;
    }
`
export const Form = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    @media (max-width: 882px){
        margin-top: 2rem;
        margin-left: 2rem;
    }
    @media (max-width: 430px){
        margin-left: 5.5rem;
    }
    

`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap:0.5rem;
`
export const Label = styled.label`
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #1F2626;
`
export const Input = styled.input`
    width: 20rem;
    padding-bottom:${props => props.paddingBottom} ;
    height: 1.7rem;
    border-radius: 6px;
    border: 1px solid #534084;
    outline: none;
    padding-left:0.4rem; 
    font-family: "Montserrat", sans-serif;
    
`
export const TituloContato = styled.h2`
font-size: 1.5rem;
    color: #151717;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 4rem;
    cursor: pointer;
    width:80%;
    word-break: keep-all;
    display: flex;
    justify-content: center;
    

    @media (max-width: 882px){
        width: 80%;
        margin-left: 3.1rem;
        
    }
`

export const BotaoContato = styled.input`
background-color: #5222D0;
        border-radius: 5px;
        border: none;
        padding: 10px;
        color: #DBFFFF;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        white-space:nowrap;
        text-decoration:none;
        font-family: "Montserrat", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        &:hover{
            background-color: #653ad3;
            
            
        }
`
import styled from "styled-components";


export const Botao = styled.a`
    
    background-color: ${props => props.backgroundColor || '#5222D0'};
    border-radius: 5px;
    border: none;
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    padding:${props => props.padding || '10px'};
    color: ${props => props.cor || '#EEEEEE'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: 500;
    cursor: pointer;
    white-space:nowrap;
    text-decoration:none;
    font-family: "Montserrat", sans-serif;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    gap: 5px;

    &:hover{
        background-color: #653ad3;
        
        
    }
`

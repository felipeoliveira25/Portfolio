import styled from "styled-components";


export const Botao = styled.a`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,171,208,1) 0%, rgba(9,9,121,1) 0%, rgba(5,179,136,1) 0%);
    border-radius: 6px;
    border: none;
    padding:${props => props.padding || '10px'};
    color: ${props => props.cor || '#fff'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: 500;
    cursor: pointer;
    white-space:nowrap;
    text-decoration:none;
    font-family: "Montserrat", sans-serif;

    &:hover{
        background: #0ce0ab;
        
        
    }
`
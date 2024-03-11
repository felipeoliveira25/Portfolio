import styled from "styled-components";

export const Titulo = styled.h2`
    font-family: ${props => props.fontFamily || '"Montserrat", sans-serif;'};
    color: ${props => props.cor || '#BDEBEA'};
    font-size: ${props => props.fontSize || '24px'};
    margin-bottom: ${props => props.marginBottom || '40px'};
    display: flex;
    justify-content:${props => props.justifyContent || 'center'};
    align-items:${props => props.alignItems || 'center'};
    margin-left: ${props => props.marginLeft || '0'};
    white-space:nowrap;
`
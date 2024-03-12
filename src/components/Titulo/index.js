import styled from "styled-components";

export const Titulo = styled.h2`
    font-family: ${props => props.fontFamily || '"Montserrat", sans-serif;'};
    color: ${props => props.cor || '#EEEEEE'};
    font-size: ${props => props.fontSize || '24px'};
    margin-bottom: ${props => props.marginBottom || '40px'};
    display: ${props => props.display || 'flex'};
    justify-content:${props => props.justifyContent || 'center'};
    align-items:${props => props.alignItems || 'center'};
    margin-left: ${props => props.marginLeft || '0'};
    padding-top: ${props => props.paddingTop}
    white-space:nowrap;
    font-weight: ${props => props.fontWeight}
    text-align: center;
`
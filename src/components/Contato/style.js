import styled from "styled-components";


export const DivContato = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8rem
`
export const Form = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    

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
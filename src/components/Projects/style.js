import styled from "styled-components";



export const SubTitulo = styled.h3`
    font-family: "Montserrat", sans-serif;
    font-size: 29px
`
export const ProjetosContainer = styled.div`
    margin-top: 10.6rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100vw;
  
`

export const CardProjeto = styled.div`
    display: flex;
    flex-direction:${props => props.direcao || 'row'};
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.9rem;
    width:65%;
    background: #FAFAFA;
    margin-top:20px;
    border-radius: 15px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height:20.75rem;

    // &:hover{
    //     transform: translateY(-5px);
    //     transition: all;
    //     cursor: pointer;
    //     transition: all 0.3s ease;
    // }
    
`
export const Imagem = styled.img`
    width: 50%;
    height: 15rem;
    object-fit: cover;
    border-radius: 12px;
    justify-content:center;
    align-items: center;
    margin: auto;
    margin-top: 1.6rem;
    cursor: pointer;
  
    
    
    
`
export const DivTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 15rem;
`
export const Descricao = styled.p`
    color: #151717;
    margin-top:1.5rem;
    font-family: "Montserrat", sans-serif;
    height:2.5rem;
    width:90%;
    font-weight: 400;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 15px;
`

export const Tags = styled.div`
    display: flex;
    text-align: center;
    justify-content:center;
    align-items: center;
    margin-top: 1rem;
    gap: 0.6rem;
    width: 100%;
`
export const BotoesContainer = styled.div`

display: flex;
gap: 0.8rem;
margin-top:1.8rem;
margin-bottom: 1.5rem;

`
export const Setas = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    gap: 5rem;
    width: 100%;
    
`



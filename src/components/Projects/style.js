import styled from "styled-components";




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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.9rem;
    width:12.5rem;
    //background: #15253E;
    //background: #3405a3;
    background: #010e16;
   margin-top:20px;
    border-radius: 15px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height:18.75rem;

    &:hover{
        transform: translateY(-5px);
        transition: all;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
`
export const Imagem = styled.img`
    width: 70%;
    height: 5rem;
    object-fit: cover;
    border-radius: 12px;
    justify-content:center;
    align-items: center;
    margin: auto;
    margin-top: 1.6rem;
  
    
    
    
`
export const Descricao = styled.p`
    color: white;
    margin-top:1.5rem;
    font-family: "Montserrat", sans-serif;
    height:2.5rem;
    width:90%;
    font-weight: 400;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 12px;
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
export const SetaProxSlide = styled.img`
    height: 2.2rem;
    
    transition: all 0.3s ease;
    position: absolute;
    top: 80rem;
    margin-right: 11.25rem;
    
    
    
`
export const SetaAntSlide = styled.img`
    height: 2.2rem;
    color: #76ABAE;
    transition: all 0.3s ease;
    position: absolute;
    top: 80rem;
    margin-left: 10rem;

   
    
    
`

export const ImgIcon = styled.img`
    height: 20px;
`
import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    @media (max-width: 430px){
        margin-left: 3rem;
    }
  
`
export const TituloSkills = styled.h2`
    font-size: 1.5rem;
    color: #151717;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 2rem;
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

export const DivSkills = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    flex-wrap: wrap;
    gap: 4rem;
`
export const Skill = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    

`
export const ImgSkill = styled.img`
    height:80px;
`
export const NameSkill = styled.p`
`
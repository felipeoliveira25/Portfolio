import { ContainerSkills, DivSkills, Skill, ImgSkill, NameSkill, TituloSkills } from './style'



function Skills(){

    const skills = [
        {id: '4', img: 'images/imgs-skills/icon-react.png', nome: 'REACT.JS' },
        {id: '6', img: 'images/imgs-skills/img-express.png', nome: 'EXPRESS.JS' },
        {id: '5', img: 'images/imgs-skills/node-js.svg', nome: 'NODE.JS' },
        {id: '3', img: 'images/imgs-skills/icon-javascript.png', nome: 'JAVASCRIPT' },
        {id: '7', img: 'images/imgs-skills/mongodb.svg', nome: 'MONGODB' },
        {id: '1', img: 'images/imgs-skills/img-ts.png', nome: 'TYPESCRIPT' },
        {id: '8', img: 'images/imgs-skills/icon-git.png', nome: 'GIT' },
        {id: '10', img: 'images/imgs-skills/img-tw.svg', nome: 'TAILWIND' },
        {id: '9', img: 'images/imgs-skills/icon-styled.png', nome: 'STYLED COMPONENTS' },
    ]

    return(
        <ContainerSkills id='skills'>
            <TituloSkills width="70%" marginLeft="150px">Skills</TituloSkills>
            <DivSkills>
                {skills.map((skill)=>(
                        <Skill key={skill.id}>
                            <ImgSkill src={skill.img}/>
                            <NameSkill>{skill.nome}</NameSkill>
                        </Skill>
                ))}
            </DivSkills>

        </ContainerSkills>
    )
}

export default Skills
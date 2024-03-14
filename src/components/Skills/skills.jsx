import { ContainerSkills, DivSkills, Skill, ImgSkill, NameSkill } from './style'
import { Titulo } from '../Titulo'


function Skills(){

    const skills = [
        {id: '1', img: 'images/imgs-skills/html5.svg', nome: 'HTML' },
        {id: '2', img: 'images/imgs-skills/css3-alt.svg', nome: 'CSS' },
        {id: '3', img: 'images/imgs-skills/icon-javascript.png', nome: 'JAVASCRIPT' },
        {id: '4', img: 'images/imgs-skills/icon-react.png', nome: 'REACT.JS' },
        {id: '5', img: 'images/imgs-skills/node-js.svg', nome: 'NODE.JS' },
        {id: '6', img: 'images/imgs-skills/img-express.png', nome: 'EXPRESS.JS' },
        {id: '7', img: 'images/imgs-skills/mysql.svg', nome: 'MYSQL' },
        {id: '8', img: 'images/imgs-skills/icon-git.png', nome: 'GIT' },
        {id: '9', img: 'images/imgs-skills/icon-styled.png', nome: 'STYLED COMPONENTS' },
    ]

    return(
        <ContainerSkills id='skills'>
            <Titulo width="70%" marginLeft="150px">Skills</Titulo>
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
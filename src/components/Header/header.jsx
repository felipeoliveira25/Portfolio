import { HeaderDiv } from './style'
import {  LogoTexto, LogoPersonalizada } from './style'
import { Lista, Opcao, BotaoDarkMode } from './style'
import { Botao } from '../Botao'
import { Link } from 'react-scroll'


function Header(){
    return(
        
        <HeaderDiv>
          <LogoTexto href='/'>F<LogoPersonalizada>DEV</LogoPersonalizada></LogoTexto>
          <Lista>
                    <Opcao>
                      <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </Opcao>
                    <Opcao>
                    <Link to='projetos' spy={true} smooth={true} offset={-100} duration={500}>Projetos</Link>
                    </Opcao>
                    <Opcao>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                    </Opcao>
                    <Botao cor="#DBFFFF" >Contato</Botao>
                    <BotaoDarkMode type='checkbox'></BotaoDarkMode>
                </Lista>
        </HeaderDiv>
          
        
    )
}

export default Header
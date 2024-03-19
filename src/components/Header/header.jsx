import { HeaderDiv } from './style'
import {  LogoTexto, LogoPersonalizada, BotaoMenu } from './style'
import { Lista, Opcao } from './style'
import { Botao } from '../Botao'
import { Link } from 'react-scroll'
import { useState } from 'react'
import MobileNav from './MobileNav/MobileNav'



function Header(){
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return(
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
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
                        <Botao cor="#DBFFFF">
                        <Link to='contato' spy={true} smooth={true} offset={-100} duration={500}>Contato</Link>
                        </Botao>
                </Lista>
                    <BotaoMenu onClick={toggleMenu}>
                        <img src="images/menu.svg" alt="" />
                        
                    </BotaoMenu>
            </HeaderDiv>
        </>
       
          
        
    )
}

export default Header
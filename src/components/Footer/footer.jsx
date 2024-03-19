import { FooterContainer, LinksSociais, LinkSocial, NomeLink, LinksGerais, LinkGeral, TituloFinal } from "./style"
import { Link } from 'react-scroll'

function Footer(){

    const links = [
        {id: '1', url:'https://wa.me/5515991853427', img:'images/imgs-sociais/whatsapp.svg', nome:'WHATSAPP'},
        {id: '2', url:'https://www.linkedin.com/in/felipeoliveira25/', img:'images/imgs-sociais/icon-linkedin.svg', nome:'LINKEDIN'},
        {id: '3', url:'https://github.com/felipeoliveira25', img:'images/imgs-sociais/icon-git.svg', nome:'GITHUB'},
    ]

    return(
        <FooterContainer>
            <LinksSociais >
            {links.map((link)=> (
                
                <LinkSocial key={link.id} href={link.url} target="_blank">
                    <img src={link.img}></img>
                    <NomeLink>{link.nome}</NomeLink>
                </LinkSocial>
            ))}
            </LinksSociais>
            <LinksGerais>
                <LinkGeral>
                <Link to='projetos' spy={true} smooth={true} offset={-100} duration={500}>Projetos</Link>
                </LinkGeral>
                <LinkGeral>
                <Link to='contato' spy={true} smooth={true} offset={-100} duration={500}>Contato</Link>
                </LinkGeral>
            </LinksGerais>
            <TituloFinal>Felipe Oliveira 2024</TituloFinal>
            
        </FooterContainer>
    )
}

export default Footer
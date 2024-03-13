import { FooterContainer, LinksSociais, LinkSocial, NomeLink, LinksGerais, LinkGeral, TituloFinal } from "./style"

function Footer(){

    const links = [
        {id: '1', url:'', img:'images/imgs-sociais/whatsapp.svg', nome:'WHATSAPP'},
        {id: '2', url:'', img:'images/imgs-sociais/icon-linkedin.svg', nome:'LINKEDIN'},
        {id: '3', url:'', img:'images/imgs-sociais/icon-git.svg', nome:'GITHUB'},
    ]

    return(
        <FooterContainer>
            <LinksSociais >
            {links.map((link)=> (
                
                <LinkSocial key={link.id} href={link.url}>
                    <img src={link.img}></img>
                    <NomeLink>{link.nome}</NomeLink>
                </LinkSocial>
            ))}
            </LinksSociais>
            <LinksGerais>
                <LinkGeral>Projetos</LinkGeral>
                <LinkGeral>Contato</LinkGeral>
            </LinksGerais>
            <TituloFinal>Web Developer 2024</TituloFinal>
            
        </FooterContainer>
    )
}

export default Footer
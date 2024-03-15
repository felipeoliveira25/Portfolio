import { DivInicial, DivTextos, MeuNome, TituloProfissao, Descricao, DivImg, ImagemBanner, ImagemSeta } from './style'
import { Botao } from '../Botao'
import { Link } from 'react-scroll'


function DescricaoInicial(){
    return(
        <DivInicial>
            <DivTextos>
                <TituloProfissao>WEB DEVELOPER</TituloProfissao>
                <MeuNome>Felipe Oliveira</MeuNome>
                <Descricao>
                Olá! Sou um Desenvolvedor Front-End, apaixonado por criar soluções inovadoras e eficientes por meio do poder do código.
                </Descricao>
                <Botao cor="#DBFFFF" padding="15px" fontSize="15px">
                <Link to='contato' spy={true} smooth={true} offset={-100} duration={500}>Entre em Contato</Link>
                </Botao>
            </DivTextos>
                
           
            <DivImg>
                <ImagemBanner src="images/img-desc-inic/img-banner.png" alt="" />
            </DivImg>
           <ImagemSeta src="images/img-desc-inic/seta.svg" alt="" className='img-seta' />
        </DivInicial>
            
            
        
    )
}

export default DescricaoInicial

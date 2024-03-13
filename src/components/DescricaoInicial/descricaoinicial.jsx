import { DivInicial, DivTextos, MeuNome, TituloProfissao, Descricao, DivImg, ImagemBanner, ImagemSeta } from './style'
import { Botao } from '../Botao'


function DescricaoInicial(){
    return(
        <DivInicial>
            <DivTextos>
                <TituloProfissao>WEB DEVELOPER</TituloProfissao>
                <MeuNome>Felipe Oliveira</MeuNome>
                <Descricao>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi suscipit assumenda voluptatem. Reprehenderit ipsum enim tempore mollitia iusto rem a consequatur quam repellat voluptas! Dolorem ullam harum nam quod?
                </Descricao>
                <Botao cor="#DBFFFF" padding="15px" fontSize="15px">Entre em Contato</Botao>
            </DivTextos>
                
           
            <DivImg>
                <ImagemBanner src="images/img-desc-inic/img-banner.png" alt="" />
            </DivImg>
           <ImagemSeta src="images/img-desc-inic/seta.svg" alt="" className='img-seta' />
        </DivInicial>
            
            
        
    )
}

export default DescricaoInicial
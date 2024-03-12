import { DivInicial, DivTextos, MeuNome, TituloProfissao, Descricao, DivImg, ImagemBanner, ImagemSeta } from './style'
import { Botao } from '../Botao'


function DescricaoInicial(){
    return(
        <DivInicial>
            <DivTextos>
                <MeuNome>Felipe Oliveira</MeuNome>
                <TituloProfissao>WEB DEVELOPER</TituloProfissao>
                <Descricao>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi suscipit assumenda voluptatem. Reprehenderit ipsum enim tempore mollitia iusto rem a consequatur quam repellat voluptas! Dolorem ullam harum nam quod?
                </Descricao>
                <Botao cor="#31363F" backgroundColor="rgba(0, 245, 160, 1)">Entre em Contato</Botao>
            </DivTextos>
                
           
            <DivImg>
                <ImagemBanner src="images/imagem-banner.png" alt="" />
            </DivImg>
           <ImagemSeta src="images/seta.svg" alt="" className='img-seta' />
        </DivInicial>
            
            
        
    )
}

export default DescricaoInicial

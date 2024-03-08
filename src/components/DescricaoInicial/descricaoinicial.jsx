import { DivInicial, DivTextos, MeuNome, TituloProfissao, Descricao, BotaoContato, DivImg, ImagemBanner, ImagemSeta } from './style'


function DescricaoInicial(){
    return(
        <DivInicial>
            <DivTextos>
                <MeuNome>Felipe Oliveira</MeuNome>
                <TituloProfissao>WEB DEVELOPER</TituloProfissao>
                <Descricao>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi suscipit assumenda voluptatem. Reprehenderit ipsum enim tempore mollitia iusto rem a consequatur quam repellat voluptas! Dolorem ullam harum nam quod?
                </Descricao>
                <BotaoContato>Contact Me</BotaoContato>
            </DivTextos>
                
           
            <DivImg>
                <ImagemBanner src="images/imagem-banner.png" alt="" />
            </DivImg>
           <ImagemSeta src="images/seta.svg" alt="" className='img-seta' />
        </DivInicial>
            
            
        
    )
}

export default DescricaoInicial
import {ProjetosContainer,TituloProjetos, CardProjeto, Imagem, DivTexto, Descricao, BotoesContainer, BotaoSite} from './style'
import { Titulo } from '../Titulo'



function Projetos(){

    const projetos = [
        {
            id:'1', 
            direcao:'row', 
            image: 'images/imgs-projects/img-behouse.png', 
            titulo:'BeHouse',  
            descricao:'Compra e venda de casas. Mockei uma APIREST com json-server.' ,  
            links: ['https://github.com/felipeoliveira25/BeHouse', 'https://be-house.vercel.app/']
        },
        {
            id:'2', 
            direcao:'row-reverse', 
            image: 'images/imgs-projects/img-acerta-num.png', 
            titulo: 'Número Secreto',  
            descricao:'Acertar número sorteado por reconhecimento de voz. Usei Web Speech API.' , 
            links:['https://github.com/felipeoliveira25/jogo-numero-secreto', 'https://jogo-numero-secreto-five-rho.vercel.app/']
        },
        {
            id:'3', 
            direcao:'row', 
            image:'images/imgs-projects/img-dash.png', 
            titulo: 'Dashboard React',  
            descricao: 'Dashboard para trazer dados sobre itens de tecnologia nas escolas.', 
            links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']
        },
        {
            id:'4', 
            direcao:'row-reverse', 
            image:'images/imgs-projects/img-calculadora.png', 
            titulo: 'Calculadora Iphone',  
            descricao: 'Calculadora semelhante a do iphone com suas funcionalidades.', 
            links:['https://github.com/felipeoliveira25/calculadora-js', 'https://calculadora-js-roan-five.vercel.app/']
        },
        {
            id:'5', 
            direcao:'row', 
            image:'images/imgs-projects/img-fsports.png', 
            titulo: 'FSports',  
            descricao: 'Aplicação para adicionar postagens com imagem e descrição. ', 
            links:['https://github.com/felipeoliveira25/projeto-fsports/tree/main', 'https://projeto-fsports-ct9b-2tp6mi8s8-felipeoliveira25.vercel.app/']
        },
        {
            id:'6', 
            direcao:'row-reverse', 
            image:'images/imgs-projects/img-flmstore.png', 
            titulo: 'FLM Store',  
            descricao: 'Site para comprar camisas de times nacionais e internacionais.', 
            links:['https://github.com/felipeoliveira25/flm-store1', 'https://flm-store1.vercel.app/']
        },
        {
            id:'7', 
            direcao:'row', 
            image:'images/imgs-projects/img-loja-carros.png', 
            titulo: 'Loja de carros API',  
            descricao: 'CRUD básico para testar conhecimentos. Com Front e Back-end conectados.', 
            links:['https://github.com/felipeoliveira25/front-end-loja-carros', 'https://front-end-loja-carros.vercel.app/']
        },
        {
            id:'8', 
            direcao:'row-reverse', 
            image:'images/imgs-projects/img-conectech.png', 
            titulo: 'Conectech',  
            descricao: 'Plataforma para networking entre profissionais e estudantes de tecnologia.', 
            links:['https://github.com/Cauasebastian/conectech-front-end', 'https://conectech-front-end-mu.vercel.app/']
        },
        {
            id:'9', 
            direcao:'row', 
            image:'images/imgs-projects/img-proj-tailw.png', 
            titulo: 'Newsletter Tailwind',  
            descricao: 'Objeto de estudo para aprimorar conhecimentos em Tailwind.', 
            links:['https://github.com/felipeoliveira25/newsletter-tailwind', 'https://newsletter-tailwind-opal.vercel.app/']
        },
       
    ]
    
  
    return(
        <ProjetosContainer id='projetos'>
            <TituloProjetos width="65%" marginLeft="67px">Projetos</TituloProjetos>

            
          
            {projetos.map((projeto)=>(
                            
                                <CardProjeto key={projeto.id} direcao={projeto.direcao}>
                                    <Imagem src={projeto.image} alt="" />
                                    <DivTexto>
                                        <Titulo  display="block"  marginBottom="0"  fontSize='16px' fontWeight='600'>{projeto.titulo}</Titulo>
                                        <Descricao>{projeto.descricao}</Descricao>
                                        <BotoesContainer>
                                                    {projeto.links && projeto.links.map((link, index)=>(
                                                        <BotaoSite target="_blank"  href={link} key={index}>
                                                            {index === 0 && (
                                                                <>
                                                                    <img src='images/imgs-btns-cards/github.svg'></img>
                                                                    GitHub
                                                                </>
                                                            )}
                                                            {index === 1 && (
                                                                <>
                                                                    <img src="images/imgs-btns-cards/globe-solid.svg" alt="" />
                                                                    Vercel
                                                                </>
                                                            )}
                                                        </BotaoSite>
                                                    ))}
                                                
                                        </BotoesContainer>
                                    </DivTexto>
                                   

                                </CardProjeto>
                              
                         ))}
                   
           
                               
                            
                         
            
        </ProjetosContainer>
    )
}

export default Projetos
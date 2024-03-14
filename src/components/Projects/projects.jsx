import {ProjetosContainer, CardProjeto, Imagem, DivTexto, Descricao, BotoesContainer} from './style'
import { Titulo } from '../Titulo'
import { Botao } from '../Botao'


function Projetos(){

    const projetos = [
        {id:'1', direcao:'row', image: 'images/imgs-projects/img-behouse.png', titulo:'BeHouse',  descricao:'Compra e venda de casas. Mockei uma APIREST com json-server.' ,  links: ['https://github.com/felipeoliveira25/BeHouse', 'https://be-house.vercel.app/']},
        {id:'2', direcao:'row-reverse', image: 'images/imgs-projects/img-acerta-num.png', titulo: 'Número Secreto',  descricao:'Acertar número sorteado por reconhecimento de voz. Usei Web Speech API.' , links:['https://github.com/felipeoliveira25/jogo-numero-secreto', 'https://jogo-numero-secreto-five-rho.vercel.app/']},
        {id:'3', direcao:'row', image:'images/imgs-projects/img-dash.png', titulo: 'Dashboard React',  descricao: 'Dashboard para trazer dados sobre itens de tecnologia nas escolas.', links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']},
        {id:'4', direcao:'row-reverse', image:'images/imgs-projects/img-calculadora.png', titulo: 'Calculadora Iphone',  descricao: 'Calculadora semelhante a do iphone com suas funcionalidades.', links:['https://github.com/felipeoliveira25/calculadora-js', 'https://calculadora-js-roan-five.vercel.app/']},
        {id:'5', direcao:'row', image:'images/imgs-projects/img-fsports.png', titulo: 'FSports',  descricao: 'Aplicação para adicionar postagens com imagem e descrição. ', links:['https://github.com/felipeoliveira25/projeto-fsports/tree/main', 'https://projeto-fsports-ct9b-2tp6mi8s8-felipeoliveira25.vercel.app/']},
        {id:'6', direcao:'row-reverse', image:'images/imgs-projects/img-flmstore.png', titulo: 'FLM Store',  descricao: 'Site para comprar camisas de times nacionais e internacionais.', links:['https://github.com/felipeoliveira25/flm-store1', 'https://flm-store1.vercel.app/']},
       
    ]
    
  
    return(
        <ProjetosContainer id='projetos'>
            <Titulo width="65%" marginLeft="67px">Projetos</Titulo>

            
          
            {projetos.map((projeto)=>(
                            
                                <CardProjeto key={projeto.id} direcao={projeto.direcao}>
                                    <Imagem src={projeto.image} alt="" />
                                    <DivTexto>
                                        <Titulo  display="block"  marginBottom="0"  fontSize='16px' fontWeight='600'>{projeto.titulo}</Titulo>
                                        <Descricao>{projeto.descricao}</Descricao>
                                        <BotoesContainer>
                                                    {projeto.links && projeto.links.map((link, index)=>(
                                                        <Botao display='flex' target="_blank"  cor="#DBFFFF"  fontSize="15px" href={link} key={index}>
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
                                                        </Botao>
                                                    ))}
                                                
                                        </BotoesContainer>
                                    </DivTexto>
                                   

                                </CardProjeto>
                              
                         ))}
                   
           
                               
                            
                         
            
        </ProjetosContainer>
    )
}

export default Projetos
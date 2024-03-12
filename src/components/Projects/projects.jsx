import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { ProjetosContainer, CardProjeto, Imagem, Descricao, BotoesContainer, SetaAntSlide, SetaProxSlide } from './style'
import { Titulo } from '../Titulo'
import { Botao } from '../Botao'

import {Navigation, Pagination, Scrollbar} from 'swiper/modules'

import {register} from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Projetos(){

    
    const projetos = [
        {id:'1', image: 'images/img-behouse.png', titulo:'BeHouse',  descricao:'Compra e venda de casas. Mockei uma APIREST com json-server.' ,  links: ['https://github.com/felipeoliveira25/BeHouse', 'https://be-house.vercel.app/']},
        {id:'2', image: 'images/img-acerta-num.png', titulo: 'Número Secreto',  descricao:'Acertar número sorteado por reconhecimento de voz. Usei Web Speech API.' , links:['https://github.com/felipeoliveira25/jogo-numero-secreto', 'https://jogo-numero-secreto-five-rho.vercel.app/']},
        {id:'3', image:'images/img-dash.png', titulo: 'Dashboard React',  descricao: 'Dashboard para trazer dados sobre itens de tecnologia nas escolas.', links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']},
        {id:'4', image:'images/img-calculadora.png', titulo: 'Calculadora Iphone',  descricao: 'Calculadora semelhante a do iphone com suas funcionalidades.', links:['https://github.com/felipeoliveira25/calculadora-js', 'https://calculadora-js-roan-five.vercel.app/']},
        {id:'5', image:'images/img-fsports.png', titulo: 'FSports',  descricao: 'Aplicação para adicionar postagens com imagem e descrição. ', links:['https://github.com/felipeoliveira25/projeto-fsports/tree/main', 'https://projeto-fsports-ct9b-2tp6mi8s8-felipeoliveira25.vercel.app/']},
        {id:'6', image:'images/img-flmstore.png', titulo: 'FLM Store',  descricao: 'Site para comprar camisas de times nacionais e internacionais.', links:['https://github.com/felipeoliveira25/flm-store1', 'https://flm-store1.vercel.app/']},
       
    ]
    
  
    return(
        <ProjetosContainer>
            <Titulo >Projects</Titulo>
            
            <Swiper className='swiper'
                modules={[Navigation, Pagination, Scrollbar]}
               slidesPerView={4}
               slidesPerGroup={1}
               loop = {true}
               navigation={{
                nextEl: '.swiper-button-next' ,
                prevEl: '.swiper-button-prev',
                
               }}
               
            >  
            {projetos.map((projeto)=>(
                            <SwiperSlide key={projeto.id} >
                                <CardProjeto>
                                    <div className='card-border-top'></div>
                                    <Imagem src={projeto.image} alt="" />
                                    <Titulo  display="block" cor="#EEEEEE" marginBottom="0"  fontSize='16px' fontWeight='600'>{projeto.titulo}</Titulo>
                                    <Descricao>{projeto.descricao}</Descricao>
                                    <BotoesContainer>
                                            
                                                  {projeto.links && projeto.links.map((link, index)=>(
                                                    <Botao display='flex' backgroundColor="#76ABAE" cor="#31363F" padding="4px 12px" fontSize="13px" href={link} key={index}>
                                                        {index === 0 && (
                                                            <>
                                                                <img src='images/github.svg'></img>
                                                                GitHub
                                                            </>
                                                        )}
                                                        {index === 1 && (
                                                            <>
                                                                <img src="images/globe-solid.svg" alt="" />
                                                                Vercel
                                                            </>
                                                        )}
                                                    </Botao>
                                                 ))}
                                            
                                    </BotoesContainer>

                                </CardProjeto>
                             </SwiperSlide>  
                         ))}
                   
            </Swiper>
                            <SetaAntSlide className='swiper-button-prev' src='images/setaAnt.svg'/>
                            <SetaProxSlide className='swiper-button-next' src='images/setaProx.svg'/>     
                            
                         
            
        </ProjetosContainer>
    )
}

export default Projetos
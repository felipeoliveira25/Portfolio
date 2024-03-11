import {Swiper, SwiperSlide} from 'swiper/react'
import { ProjetosContainer, Slides, CardProjeto, Imagem, Descricao, Botoes, Tags, BotoesContainer } from './style'
import { Titulo } from '../Titulo'
import { Botao } from '../Botao'
import { useState, useEffect } from 'react'
import {Navigation, Pagination, Scrollbar} from 'swiper/modules'

import {register} from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Projetos(){

    const [slidePerView, setSlidePerView] = useState(4)
    const projetos = [
        {id:'1', image: 'images/img-behouse.png', titulo:'BeHouse', tags:['HTML', 'CSS', 'JavaScript'],  links: ['https://github.com/felipeoliveira25/BeHouse', 'https://be-house.vercel.app/']},
        {id:'2', image: 'images/img-acerta-num.png', titulo: 'Número Secreto', tags:['HTML', 'CSS', 'JavaScript', 'Spech API']},
        {id:'3', image:'images/img-dash.png', titulo: 'Dashboard React', tags:['React', 'Props', 'Router Dom'], links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']},
        {id:'4', image:'images/img-dash.png', titulo: 'Dashboard React', tags:['React', 'Props', 'Router Dom'],  links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']},
        {id:'5', image:'images/img-dash.png', titulo: 'Dashboard React', tags:['React', 'Props', 'Router Dom'], links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']},
        {id:'6', image:'images/img-dash.png', titulo: 'Dashboard React', tags:['React', 'Props', 'Router Dom'], links:['https://github.com/felipeoliveira25/dashboard-react', 'https://dashboard-react-ashen.vercel.app/']},
        
        
    ]
    
    

    useEffect(()=> {
        function handleResize(){
            if(window.innerWidth < 800){
                setSlidePerView(2)
            }else{
                setSlidePerView(4)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return(
        <ProjetosContainer>
            <Titulo >Projects</Titulo>
            <Slides>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
               slidesPerView={slidePerView}
               pagination={{clickable: true}}
               scrollbar={{ draggable: true }}
               spaceBetween={10}
               slidesPerGroup={1}
               grabCursor={true}
               centeredSlides={false}
               
               
               
            >  
            {projetos.map((projeto)=>(
                            <SwiperSlide key={projeto.id} >
                                <CardProjeto>
                                    <Imagem src={projeto.image} alt="" />
                                    <Titulo marginBottom="0" marginLeft="10px">{projeto.titulo}</Titulo>
                                    <Tags>
                                        {projeto.tags && projeto.tags.map((tag, index)=>(
                                            <Botao cor="#252728" padding="5px" fontSize="13px" key={index}>{tag}</Botao>
                                        ))}
                                    </Tags>
                                    <Descricao>{projeto.descricao}</Descricao>
                                    <BotoesContainer>
                                            <Botoes>
                                                  {projeto.links && projeto.links.map((link, index)=>(
                                                    <Botao cor="#252728" padding="5px" fontSize="13px" href={link} key={index}>
                                                        {index === 0 ? 'GitHub': 'Vercel'}
                                                    </Botao>
                                                 ))}
                                            </Botoes>
                                    </BotoesContainer>

                                </CardProjeto>
                             </SwiperSlide>  
                         ))}
            </Swiper>
            </Slides>
           
        </ProjetosContainer>
    )
}

export default Projetos
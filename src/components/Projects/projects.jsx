import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react'
function Projetos(){

    const projetos = [
        {id:'1', image: '/public/images/img-behouse.png'},
        {id: '2', image: '/public/images/img-behouse.png'}
    ]
    return(
        <div className='div-projetos'>
            <h3 className='titulo-projects'>Projects</h3>
            <Swiper>
                {projetos.map((item)=>(
                    <SwiperSlide key={item.id}>
                       <img src={item.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>


































            {/* <ul className='projetos'>
                <li className='projeto'>
                    <img src="/public/images/img-behouse.png" alt="" />
                    <h3 className='projeto-titulo'>BeHouse</h3>
                    <ul className='projeto-tags'>
                        <li className='tag'>HTML</li>
                        <li className='tag'>CSS</li>
                        <li className='tag'>JavaScript</li>
                    </ul>
                    <p className='projeto-descricao'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div className='projeto-btns'>
                        <section className='btn'>
                            <a href="https://be-house.vercel.app/">Deploy</a>
                        </section>
                        <section className='btn'>
                            <a href="https://github.com/felipeoliveira25/BeHouse">Repositório</a>
                        </section>
                        
                        
                    </div>
                </li>

                <li className='projeto'>
                    <img src="/public/images/img-behouse.png" alt="" />
                    <h3 className='projeto-titulo'>BeHouse</h3>
                    <ul className='projeto-tags'>
                        <li className='tag'>HTML</li>
                        <li className='tag'>CSS</li>
                        <li className='tag'>JavaScript</li>
                    </ul>
                    <p className='projeto-descricao'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div className='projeto-btns'>
                        <section className='btn'>
                            <a href="https://be-house.vercel.app/">Deploy</a>
                        </section>
                        <section className='btn'>
                            <a href="https://github.com/felipeoliveira25/BeHouse">Repositório</a>
                        </section>
                        
                        
                    </div>
                </li>

                

                
            </ul> */}
        </div>
    )
}

export default Projetos
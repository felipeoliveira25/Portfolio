import './MobileNav.css'
import { Link } from 'react-scroll'

function MobileNav( {isOpen, toggleMenu}){
    return(
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className='mobile-menu-container'>
                    <a className='logo' href="/">F<span>DEV</span></a>

                    <ul>
                        <li>
                        <Link className='menu-item' to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                        </li>
                        <li>
                        <Link className='menu-item' to='projetos' spy={true} smooth={true} offset={-100} duration={500}>Projetos</Link>
                        </li>
                        <li>
                        <Link className='menu-item' to='skills' spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                        </li>
                        <li>
                        <Link className='menu-item-ctt' to='contato' spy={true} smooth={true} offset={-100} duration={500}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav
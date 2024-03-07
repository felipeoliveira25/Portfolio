//import './style.css'
import Logo from '../Logo/logo'
import OpcoesHeader from '../OpcoesHeader/opcoesHeaderf'
import { HeaderDiv } from './style'


function Header(){
    return(
        <HeaderDiv>
          <Logo/>
          <OpcoesHeader/>
        </HeaderDiv>
          
        
    )
}

export default Header
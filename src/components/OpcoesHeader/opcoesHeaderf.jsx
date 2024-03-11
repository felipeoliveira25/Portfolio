import { Lista, Opcao } from './style'
import { Botao } from '../Botao'



function OpcoesHeader(){
    return(
        <Lista>
            <Opcao>Home</Opcao>
            <Opcao>Projects</Opcao>
            <Opcao>Skills</Opcao>
            <Botao cor="#252728">Contact</Botao>
        </Lista>
    )
}
export default OpcoesHeader
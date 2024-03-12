import { Lista, Opcao } from './style'
import { Botao } from '../Botao'



function OpcoesHeader(){
    return(
        <Lista>
            <Opcao>Home</Opcao>
            <Opcao>Projetos</Opcao>
            <Opcao>Skills</Opcao>
            <Botao cor="#31363F">Contato</Botao>
        </Lista>
    )
}
export default OpcoesHeader
import { Lista, Opcao } from './style'
import { Botao } from '../Botao'



function OpcoesHeader(){
    return(
        <Lista>
            <Opcao>Home</Opcao>
            <Opcao>Projetos</Opcao>
            <Opcao>Skills</Opcao>
            <Botao cor="rgba(0, 245, 160, 1)">Contato</Botao>
        </Lista>
    )
}
export default OpcoesHeader

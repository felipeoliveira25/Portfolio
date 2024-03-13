import { Lista, Opcao, BotaoDarkMode } from './style'
import { Botao } from '../Botao'



function OpcoesHeader(){
    return(
        <Lista>
            <Opcao>Home</Opcao>
            <Opcao>Projetos</Opcao>
            <Opcao>Skills</Opcao>
            <Botao cor="#DBFFFF" >Contato</Botao>
            <BotaoDarkMode type='checkbox'></BotaoDarkMode>
        </Lista>
    )
}
export default OpcoesHeader

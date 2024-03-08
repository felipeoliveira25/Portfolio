import { Lista, Opcao, OpcaoContato } from './style'



function OpcoesHeader(){
    return(
        <Lista>
            <Opcao>Home</Opcao>
            <Opcao>Projects</Opcao>
            <Opcao>Skills</Opcao>
            <OpcaoContato>Contact</OpcaoContato>
        </Lista>
    )
}
export default OpcoesHeader
import Header from './components/Header/header'
import DescricaoInicial from './components/DescricaoInicial/descricaoinicial'
import SobreMim from './components/SobreMim/sobremim'
import Projetos from './components/Projects/projects'
import styled from 'styled-components'

const AppContainer = styled.div`
`


function App(){
  return (
    
    <AppContainer>
      <Header/>
      <DescricaoInicial/>
      <SobreMim/>
      <Projetos/>
    </AppContainer>
   
  )
}

export default App

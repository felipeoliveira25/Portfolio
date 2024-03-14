import Header from './components/Header/header'
import DescricaoInicial from './components/DescricaoInicial/descricaoinicial'
import SobreMim from './components/SobreMim/sobremim'
import Projetos from './components/Projects/projects'
import Skills from './components/Skills/skills'
import Footer from './components/Footer/footer'
import styled from 'styled-components'

const AppContainer = styled.div`
`


function App() {
  return (
    <AppContainer id='home'>
      <Header />
      <DescricaoInicial />
      <SobreMim  />
      <Projetos />
      <Skills  />
      <Footer />
    </AppContainer>
  );
}


export default App

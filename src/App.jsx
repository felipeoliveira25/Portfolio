import './App.css'
import Header from './components/Header/header'
import DescricaoInicial from './components/DescricaoInicial/descricaoinicial'
import SobreMim from './components/SobreMim/sobremim'
import Projetos from './components/Projects/projects'




function App(){
  return (
    
    <div className='App'>
      <Header/>
      <DescricaoInicial/>
      <SobreMim/>
      <Projetos/>
    </div>
   
  )
}

export default App

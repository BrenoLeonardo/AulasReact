import './App.css'
import Titulo from './components/titulo'
import Paragrafo from './components/Paragrafo'
//se dizer que nunca le, é porque esqueceu de chamar ele aqui

function App() { 
  return (
    <header>
      <Titulo texto="Eu sou o primeiro titulo" cor="red"/>
      <Titulo texto="Eu sou o segundo título" cor="yellow"/>
      <Paragrafo/>
    </header>
  )

}

export default App

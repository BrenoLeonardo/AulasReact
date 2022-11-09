import { useState } from 'react'
import './App.css'

function App() {
  const [textoDigitado, setTextoDigitado] = useState("Informação no state")
  //const[textoExibido, setTextoExibido] = useState(e.target.value)
  const handleText = () => {
    console.log("Passar o texto digitado")
    //setTextoExibido(e.target.value)
  }

  const handleTextoDigitado = (texto) => {
    console.log(texto.target.value)
    setTextoDigitado(texto.target.value)
  }

  return (
    <>
      <h1>INPUTS CONTROLADOS</h1>
      <h2>Informação digitada: {textoDigitado}</h2>
      <input
        type="text"
        placeholder="Digite seu texto aqui"
        //onChange={(e) => setTextoDigitado(e.target.value)}
        //onChange={(e) => handleTextoDigitado(e.target.value)}
        onChange={handleTextoDigitado}
        Value={textoDigitado}
      />
      <button onClick={handleText}>Enviar</button>
    </>
  )
}

export default App

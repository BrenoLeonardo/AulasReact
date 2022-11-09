// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         { <a href="https://vitejs.dev" target="_blank"> }
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

//variaveis no JS - podem guardar funções
// var - não usar pode gerar problemas no escopo
// let - variavel comum
// cosnt - constante

//funções
//função anonima = não tem nome
let funcao = function(){
  console.log("FUNCAO")
}
//arrow function
let funcao2 = () => {
  console.log("FUNCAO2")
}

let funcao3 = () => console.log("FUNCAO 3")


import { useState } from 'react'

//let nome = "João Felipe"

const App = () => {
  //const [outroNome, setOutroNome] = useState("Outro Nome")
  const [contador, setContador] = useState(0)

  function clique() {
    //nome = "Juliana"
    //console.log(nome)
    setOutroNome("Juliana")
  }

  function adicionar(){
    //let cont = contador + 1
    setContador(contador + 1)
    //setContador(contador + 1) o react só roda um por vez
    // setContador(prevState => prevState + 1)//evita processamento de fila
  }

  return (
    <>
      <h1>{contador}</h1>
      <h1>{}</h1>
      <button onClick={() => console.log("FUNCAO 4")}>CLIQUE AQUI</button>
    </>
  )
}

//alt + shift = f formatar bonitinho
export default App
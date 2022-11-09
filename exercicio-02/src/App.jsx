// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
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

import { useState } from 'react'
import './App.css'
//import './assets'

function App(){
  const [contador, setContador] = useState(0)
  const [ml, setMl] = useState(0)

  function adicionar(){
    setContador(contador + 1)
  }
  function resetar(){
    setContador(0)  
  }

  return (
    <div>
      <div>
        <h1>Quantidade de ml no copo: {ml} ml</h1>
        <input type="number" placeholder="0 ml" 
        value={ml} onChange={e => setMl(e.target.value)}/>
      </div>
      <div>
        <h1>Copos de água bebidos: {contador}</h1>
        <button onClick={(adicionar)}>CLIQUE AQUI PARA BEBER</button>
      </div>
      <div>
        <button onClick={(resetar)}>CLIQUE AQUI PARA RESETAR</button>
        <h1>Quantidade total de ml: {ml * contador}</h1>
      </div>
    </div>
  )
}

export default App
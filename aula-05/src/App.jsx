import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contato from './components/Contato'
import Professores from './components/Professores'

function App() {
  const [count, setCount] = useState(0)
  const nome = "João"
  const nome2 = "Carlos"
  const nome3 = "Amanda"

  const nomes = ["João","Carlos","Amanda"]

  // nomes. forEach((item, index) => {
  //   if(index > 1) return
  //   console.log(index)
  //   console.log(item)
  // })

  const novoArray = nomes.map( (nome, index) => {
    if(index >1) return
    console.log(nome)
    return <h1>nome</h1>
  })

  console.log("NovoArray", novoArray)

  const coisas = ["Pedro",null,true]
  const arrayDeObjetos =[
    {nome: "João", id: 1, materias: ["WEB", "Mobile"]},
    {nome: "Carlos", id:2},
    {nome: "Amanda", id:3},
  ]

  const contatos =[
    {id:1, nome:"Breno", email: "breno@gmail.com"},
    {id:2, nome:"Paulo", email: "paulo@gmail.com"},
    {id:3, nome:"Leticia", email:"leticia@gmail.com"},
  ]
  //console.log(nomes)
  //console.log(nomes.length)
  //console.log(nomes[0])

  // console.log(arrayDeObjetos)
  // console.log(arrayDeObjetos[0].nome)
  // console.log(arrayDeObjetos[0].materias[1])
  
  // const renderizaNomes=()=>{
  //   {nomes.map((item,index) => {
  //     return <h1 key={index}>{item}</h1>
  //   })}
  // }

  const professores =[
    {id:1, nome: "João", materias: ['primeira', 'segunda']},
    {id:2, nome: "Lucas", materias: ['segunda','terça']},
    {id:3, nome: "Roberto", materias: ['terceira','quarta']},
  ]

  return (
    <>
      {/* <h1>Trabalhando com Arrays e Objetos</h1>
      {nomes.map((item,index) => {
        return <h1 key={index}>{item}</h1>
      })} */}
      {/* {renderizaNomes()} */}
      {/* {contatos.map((item) =>{
        return <Contato contato={item} key={item.id}/>
      })} */}
      {professores.map((item) =>{
        return <Professores professor={item} key={item.id}/>
        
      })}
      
      {/* <Contato contato={contatos[0]}/> */}
    </>
  )
}

export default App

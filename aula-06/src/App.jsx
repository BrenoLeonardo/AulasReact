//import { useState, useEffect } from 'react'
import './App.css'
//import api from './services/api'
import Gato from './components/gato'

function App() {
  // const[nome,setNome] = useState("João Felipe")
  // const[idade,setIdade] = useState(31)
  // const[cat, setCat] = useState([])
  //console.log("Nome: ", nome)
  //console.log("Idade: ", idade)
  
  
  //so é executado após componente renderizado
  // useEffect(() => {
  //   console.log("Estou dentro do useEffect!")
  // }, [nome, idade])

  // const asyncRequest = async () => {
  //   console.log("Primeiro")
  //   //await - faz a execução
  //   //await for (let index = 0; index < 100000; index++){console.log(index)}
  //   console.log("Segundo")
  //   console.log("Terceiro")
  // }

  //FETCH API
  //AXIOS para fazer requisições HTTP - GET / POST / PUT / DELETE

  // const getCat = async() => {
  //   const {data} = await api.get("/images/search")
  //   setCat(data)
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getCat();
  // },[])

  // useEffect(() => {
  //   const getCat = async() => {
  //     const {data} = await api.get("/images/search")
  //     console.log(data)
  //   }
  //   getCat();
  // },[])

  //só é executado após o componente ser renderizado
  return (
    <>
      <Gato />
      <Botao getGato={getCat}/>
    </>
  )
}

export default App

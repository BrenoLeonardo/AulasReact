import api from "../../services/api"
import { useState, useEffect } from 'react'
import "./styles.css"

const Gato = () => {
  // const [cat, setCat] = useState([])

  // const getCat = async () => {
  //   const { data } = await api.get("/images/search")
  //   setCat(data)
  //   console.log(data)
  // }

  useEffect(() => {
    getCat();
  }, [])

  return (
    <>
      <h1>Use Effect</h1>
      <h1>{cat.length > 0 && cat[0].url}</h1>
      {cat.length > 0 ? (
        <img src={cat[0].url} alt="Gatinho" className="img-gatinho" />
      ) : (
        <h1>Sem imagem no momento</h1>

        // <Botao getCat={getCat}/>
      )}
      {/* <div>
        <button onClick={() => getCat()}>IMAGEM DE GATOS</button>
      </div> */}

      {/* <button onClick={()=> setNome("Outro Nome")}>CLIQUE AQUI</button>
          <button onClick={()=> setIdade(idade + 1)}>INCREMENTAR IDADE</button> */}
    </>
  )
}

export default Gato


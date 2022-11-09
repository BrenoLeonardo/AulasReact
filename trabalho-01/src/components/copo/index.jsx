import { useState } from 'react'
import './styles.css'
//import './assets'

function Copo() {
  const [contador, setContador] = useState(0)
  const [ml, setMl] = useState(0)
  const [cota, setCota] = useState(0)
  const [mensagem, setMensagem] = useState("")
  //const [date, setDate] = useState("")
  const [hist, setHist] = useState("")
  const date = new Date().toLocaleString()

  function adicionar() {
    setMensagem("")
    setContador(contador + 1)
    if (cota > 0 && ml > 0) {
      if (ml * (contador + 1) >= cota) {
        setMensagem("Atingiu a cota diaria de água esperada!")
        console.log({ mensagem })
      }
      setHist(`${date} ${hist}`)
      // setDate(`Ocorrido na data: ${new Date().toLocaleString()} `)
    } else {
      setMensagem("Insira um valor de cota e ml válido! Valor acima de zero!")
      console.log("Insira cota válida")
    }

  }
  function resetar() {
    setMensagem("")
    setMl(0)
    setCota(0)
    setContador(0)
    setHist("")
  }

  return (
    <div>
      <div>
        <h1>DIÁRIO DA ÁGUA</h1>
      </div>
      <div className="inputs">
        <h2>Insira cota de água diária</h2>
        <input type="number" min={0} placeholder="cota diaria"
          value={cota} onChange={e => parseInt(setCota(e.target.value))} />
        <h2>Quantidade de ml no copo: {ml} ml</h2>
        <input type="number" min={0} placeholder="0 ml"
          value={ml} onChange={e => parseInt(setMl(e.target.value))} />
      </div>
      <div className='botaos'>
        <h2>Copos de água bebidos: {contador}</h2>
        <button onClick={(adicionar)}>CLIQUE AQUI PARA BEBER</button>
        <button onClick={(resetar)}>CLIQUE AQUI PARA RESETAR</button>
      </div>
      <div className="resultados">
        <h2 className="total">Quantidade total de ml: {ml * contador}</h2>
        <h3 className="mensagem">{mensagem}</h3>
        <h3 className="hora">{hist}</h3>
      </div>
    </div>
  )
}

export default Copo

// Um botão para marcar o copo de água bebido.
// Um botão para resetar a contagem
// Um input para setar quantos ml tem o copo;
// O Total de água ingerida deve atualizar automaticamente
// quando clicar no botão de copo de água bebido.

// Pontos adicionais

// Opção para definir uma meta de ingestão diária de água e
// mostrar uma mensagem quando a pessoa conseguir atingir.
// Diário da água: Exibir histórico com a data e hora que a
// pessoa bebeu(clicou no botão).

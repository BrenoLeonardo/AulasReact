import "./styles.css"
import {useState} from "react"

const Idade = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [mensagem, setMensagem] = useState("")

    const conferirIdade = () => {
        if(idade < 18){
            setMensagem(`Olá ${nome}, você é menor de idade!`)
            console.log("Menor de idade")
        }else{
            setMensagem(`Olá ${nome}, você é maior de idade!`)
            console.log("Maior de idade")
        }
    }
    return(
        <>
            <h1>Teste de Idade</h1>
            <p>Verificando nome</p>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <p>Verificando idade</p>
            <input
                type="number"
                placeholder="Digite sua idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            
            <button onClick={(conferirIdade)}>Conferir</button>
            <h2>{mensagem}</h2>
        </>
    )
};

export default Idade;


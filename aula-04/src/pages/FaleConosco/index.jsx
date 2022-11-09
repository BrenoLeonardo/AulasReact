import { Link } from 'react-router-dom'

export const Contatos = () => {

    const contato ={
        id: 1,
        nome: "João Felipe",
        email: 'joao@serratec.com'
    }
    const eu={
        id:4,
        nome: "Breno Leonardo Ferreira de Paula",
        email: 'breno.leonardof10@gmail.com'
    }
    const contato2={
        id:2,
        nome: "Juliana",
        email: 'juliana@hotmail.com'
    }

    console.log(contato.nome)
    return (
        <>
            <h1>CONTATOS</h1>
            <ul>
                <li>
                    <Link to='/galeria'>GALERIA</Link>
                </li>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
            </ul>

            <ol>
                <li><Link to={`/contatos/${contato.id}`} state={{nome: contato.nome, id: contato.id, email: contato.email}}>João Felipe</Link></li>
                <li><Link to={`/contatos/${contato2.id}`} state={{nome: contato2.nome, id: contato2.id, email: contato2.email}}>Juliana</Link></li>
                <li><Link to='/contatos/3'>Caroline</Link></li>
                <li><Link to={`/contatos/${eu.id}`} state={{nome: eu.nome, id: eu.id, email: eu.email}}>Breno Leonardo</Link></li>
            </ol>
        </>
    )
}

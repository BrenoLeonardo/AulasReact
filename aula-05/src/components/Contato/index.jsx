//criar uma array de 3 contatos no App.jsx
//id, nome,email
//Components contato recebe 1 contato via props
//exibir informações do contato na tela
//chamar componente contato lá no JSX do App.jsx


function Contato({contato}){
    return (
        <div style={{backgroundColor: "lightgray", color:"blue",padding: 10, marginBottom: 5}}>
            <h1>id: {contato.id}</h1>
            <h1>nome: {contato.nome}</h1>
            <h1>email: {contato.email}</h1>
        </div>     
    )
}

export default Contato
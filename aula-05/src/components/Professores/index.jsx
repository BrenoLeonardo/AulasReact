function Professores({professor}){
    return (
        <div style={{backgroundColor: "lightgray", color:"blue",padding: 10, marginBottom: 5}}>
            <h1>id: {professor.id}</h1>
            <h1>nome: {professor.nome}</h1>
            <h1>materias: {professor.materias.map(item => `${item}`)}</h1>
        </div>     
    )
}

export default Professores
import {useParams, useLocation} from 'react-router-dom'

const ContatoDetalhes = () => {
    const {id} = useParams();
    const {state} = useLocation();

    console.log(state)

    console.log(typeof id)

    const renderizaNome = () =>{
        switch(id){
            case '1':
                return "João Felipe"
                //break;
            case '2':
                return "Amanda"
                //break;
            case '3':
                return "Caroline"
                //break;
            default:
                return "DESCONHECIDO"
                //break;
        }
    }
    //renderização condicional através do IF
    if(id == '1'){
        return <h1>Contato: João que veio do if</h1>
    }

    return (
        <h1>
            {/* Renderização condicional com operador lógico */}
            {id == '2' && "Contato: Amanda que veio do &&"}
            {/* Contato: {renderizaNome()} */}
            {/* Renderização condicional com operador Ternário */}
            {id == 3 ? "Caroline do Operador ternário": null}
            {id == '4' && "Contato: Breno"}
        </h1>
    ) 
}

export default ContatoDetalhes
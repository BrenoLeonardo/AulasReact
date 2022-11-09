import { Link } from 'react-router-dom'

export function Galeria() {
    return (
        <>
            <h1>GALERIA</h1>
            <ul>
                <li>
                    <Link to='/contatos'>CONTATOS</Link>
                </li>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
            </ul>


        </>
    )
}

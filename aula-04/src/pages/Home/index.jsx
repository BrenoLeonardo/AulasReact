import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>HOME</h1>
            {/* <a href="/contatos">CONTATOS</a> */}
            <ul>
                <li>
                    <Link to='/contatos'>CONTATOS</Link>
                </li>
                <li>
                    <Link to='/galeria'>GALERIA</Link>
                </li>
            </ul>
        </>
    )
}

export default Home
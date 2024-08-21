import { Link } from "react-router-dom";


export default function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <Link to = "/">
                        <li>Home</li>
                    </Link>
                    <Link to = "/Ofertas">
                        <li>Ofertas</li>
                    </Link>
                    <Link to = "/Produtos">
                        <li>Produtos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
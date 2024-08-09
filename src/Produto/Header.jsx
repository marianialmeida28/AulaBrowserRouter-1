import {link} from " react-router-dom";
export default function Header(){
    return(
        <header>
            <link to="/home">
                <li>Home</li>
            </link>
            <link to="/Produto">
                <li>Poduto</li>
            </link>
            <link to="/oferta">
                <li>oferta</li>
            </link>
        </header>
       
    )
}
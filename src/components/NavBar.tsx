import { Link } from "react-router-dom";
import { Nav, BtnGoBack } from "./NavBar.style";

type NavBarProps = {
    hasGoBack?: boolean;
}

function NavBar(props: NavBarProps) {
    return (
        <Nav className="nav">
            <Link to="/" className='brand'>Pokédex</Link>
            {props.hasGoBack && (<BtnGoBack to="/" >Voltar</BtnGoBack>)}
        </Nav>
    )
}

export default NavBar;
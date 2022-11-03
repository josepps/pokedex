import { useSelector } from "react-redux";
import { StoreState } from "../redux";
import { Link } from "react-router-dom";
import { Nav, BtnGoBack, TotalPokemons } from "./NavBar.style";

type NavBarProps = {
    hasGoBack?: boolean;
}

function NavBar(props: NavBarProps) {
    const totalPokemons = useSelector((state: StoreState) => state.favorite);
    return (
        <Nav className="nav">
            <Link to="/" className='brand'>Pokédex</Link>
            <div>
                <TotalPokemons>Total de favoritos: {totalPokemons.length}</TotalPokemons> 
                {props.hasGoBack && (<BtnGoBack to="/" >Voltar</BtnGoBack>)}
            </div>           
        </Nav>
    )
}

export default NavBar;
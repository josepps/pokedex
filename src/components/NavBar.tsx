import './NavBar.css'

type NavBarProps = {
    hasGoBack?: boolean;
}

function NavBar(props: NavBarProps) {
    return (
        <nav className="nav">
            <a href="#" className='brand'>Pokédex</a>
            {props.hasGoBack && (<a href="#" className='btn-goBack'>Voltar</a>)}
        </nav>
    )
}

export default NavBar;
import { NavLink } from "react-router-dom"
import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to="/soda">SODA</NavLink>
            <NavLink exact to="/chips">CHIPS</NavLink>
            <NavLink exact to="/fish">FISH</NavLink>
        </nav>
    )
}

export default NavBar
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imgSonicSynergy = "../../img/SonicSinnergy.png"
    return (
        <header className='header'>
            <Link to={"/"}>
                <img className='img-sonic-synergy' src={imgSonicSynergy} alt="" />
                
            </Link>
            <nav>

                <ul>
                    
                    <li className="nav-item">
                        <NavLink to={"/categoria/1"}> Guitarras </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/categoria/2"}> Bajos </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/categoria/3"}> Sintetizadores </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar
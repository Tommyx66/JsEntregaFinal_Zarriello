import { NavLink, Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    const imgSonicSynergy = "../../img/SonicSinnergy.png"
    return (

        <div className='footer-container'>
            <div className='footer-logo'>
                <Link to={"/"}>
                    <img className='img-sonic-synergy-footer' src={imgSonicSynergy} alt="logo Sonic Sinnergy" />

                </Link>
                <h3>SONIC SINNERGY</h3>
            </div>
            <div>
                <nav className="footer-menu">
                    <ul>
                        <li className="nav-item">
                            <NavLink to={"/"}> Inicio </NavLink>
                        </li>
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
                <div className="footer-social">

                    <li className="footer-social-img">
                        <a href="www.facebook.com">
                            <img className='footer-social-img' src='https://img.freepik.com/iconos-gratis/facebook-logo-circular_318-37205.jpg' alt='img social media'></img>
                        </a>
                    </li>
                    <li className="footer-social-img">
                        <a href="www.instagram.com">
                            <img className='footer-social-img' src='https://i.pinimg.com/originals/e3/8f/af/e38fafda2ddb4d5ba66b96a0398b9b5f.png' alt='img social media'></img>
                        </a>
                    </li>
                    <li className="footer-social-img">
                        <a href="www.whatsapp.com">
                            <img className='footer-social-img' src='https://static.vecteezy.com/system/resources/thumbnails/024/281/399/small/black-and-white-whatsapp-logo-vector.jpg' alt='img social media'></img>
                        </a>

                    </li>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Sonic Sinnergy. Todos los derechos reservados.</p>
            </div>
        </div>

    )
}



export default Footer
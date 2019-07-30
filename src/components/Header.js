import React from 'react';
import logo from '../assets/rocket.png';
import '../css/Header.css';

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} />
                <div>
                    <span className="myProfile">Meu Perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
    )
}
export default Header;
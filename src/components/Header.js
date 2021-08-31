import logo from 'assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom';
import 'styles/index.css';


class Header extends React.Component{
    render(){
        return (
            <header className='header-desktop'>
                <img src={logo} alt="Kasa" className='logo'/>
                <div className='header-nav'>
                    <Link to='/'>Accueil</Link>
                    <Link to='/apropos'>A Propos</Link>
                </div>
            </header>
        );
    }
}

export default Header
import logo from 'assets/logo.png'
import React from 'react'
import 'styles/index.css';


class Header extends React.Component{
    render(){
        return (
            <header className='header-desktop'>
                <img src={logo} alt="Kasa" className='logo'/>
                <nav className='header-nav'>
                    <a href='#top'>Acceuil</a>
                    <a href='#top'>A Propos</a>
                </nav>
            </header>
        );
    }
}

export default Header
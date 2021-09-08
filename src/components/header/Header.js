import 'components/header/Header.css'
import logo from 'assets/logo.png'
import Banner from 'components/banner/Banner';
import React from 'react'
import { Link } from 'react-router-dom';


class Header extends React.Component{
    render(){
        return (
            <header className='header-desktop'>
                <img src={logo} alt="Kasa" className='logo'/>
                <nav className='header-nav'>
                    <Link to='/'>Accueil</Link>
                    <Link to='/apropos'>A Propos</Link>
                </nav>
                {this.props.banner
                ? <Banner picture={this.props.picture} slogan={this.props.slogan}/>
                : null }
            </header>
        );
    }
}

export default Header
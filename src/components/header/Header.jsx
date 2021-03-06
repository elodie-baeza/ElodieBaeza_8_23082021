import 'styles/components/header/Header.css'
import logo from 'assets/logo.png'
import Banner from 'components/banner/Banner';
import React from 'react'
import { Link } from 'react-router-dom';


class Header extends React.Component{
    render(){
        return (
            <header>
                <nav>
                    <Link to='/' className='logo'>
                        <img src={logo} alt="Kasa" />
                    </Link>
                    <Link to='/'>Accueil</Link>
                    <Link to='/apropos'>A Propos</Link>
                </nav>
                {this.props.banner &&
                <Banner picture={this.props.picture} slogan={this.props.slogan}/>}
            </header>
        );
    }
}

export default Header
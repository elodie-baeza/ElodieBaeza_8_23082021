import logo from 'assets/logo.png'
import React from 'react'
import 'styles/Footer.css';


class Footer extends React.Component{
    render(){
        return (
            <footer className='footer-desktop'>
                <img src={logo} alt="Kasa" className='footer-logo'/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer
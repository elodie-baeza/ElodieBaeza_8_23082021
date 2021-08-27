import React from 'react'
import 'styles/index.css'
import { ReactComponent as Logo } from 'assets/logo.svg'


class Footer extends React.Component{
    render(){
        return (
            <footer className='footer-desktop'>
                <Logo className='footer-logo'/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer
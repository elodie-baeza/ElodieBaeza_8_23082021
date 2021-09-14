import 'styles/components/footer/Footer.css'
import React from 'react'
import { ReactComponent as Logo } from 'assets/logo.svg'


class Footer extends React.Component{
    render(){
        return (
            <footer className='footer'>
                <Logo className='footer-logo'/>
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer
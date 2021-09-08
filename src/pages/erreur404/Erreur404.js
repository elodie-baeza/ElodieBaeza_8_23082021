import 'pages/erreur404/Erreur404.css';
import React from 'react'
import { Link } from 'react-router-dom'

class Erreur404 extends React.Component {

    render() {
        return (    
            <section className='erreur404'>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </section>
        )
    }
    
}

export default Erreur404
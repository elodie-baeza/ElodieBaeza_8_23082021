import React from 'react'
import { Link } from 'react-router-dom'
import 'styles/erreur404.css'

class Erreur404 extends React.Component {

    render() {
        return (
            <div className='erreur404'>
                <div>
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </div>
        )
    }
    
}

export default Erreur404
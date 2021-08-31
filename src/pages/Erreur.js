import React from 'react'
import { Link } from 'react-router-dom'
import 'styles/index.css'

class Erreur extends React.Component {

    render() {
        return (
            <div className='erreur404'>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/accueil'>Retourner sur la page d’accueil</Link>
            </div>
        )
    }

}

export default Erreur
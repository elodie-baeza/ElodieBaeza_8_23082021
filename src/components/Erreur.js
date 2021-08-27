import React from 'react'
import 'styles/index.css'

class Erreur extends React.Component {

    render() {
        return (
            <div className='erreur404'>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="#top">Retourner sur la page d’accueil</a>
            </div>
        )
    }

}

export default Erreur
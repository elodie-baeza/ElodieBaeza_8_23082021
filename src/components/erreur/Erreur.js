import 'components/erreur/Erreur.css';
import React from 'react'
import { Link } from 'react-router-dom'

class Erreur extends React.Component {

    render() {
        return (    
            <section className='erreur'>
                <h2>{this.props.number}</h2>
                <p>{this.props.message}</p>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </section>
        )
    }
    
}

export default Erreur
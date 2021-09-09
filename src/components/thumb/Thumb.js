import 'styles/components/thumb/Thumb.css'
import React from 'react';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {

    render() {
        return(
            <Link to={`/fiche/${this.props.id}`} className='thumb'>
                {this.props.cover !== ''
                ? <img src={this.props.cover} alt='cover' />
                : null
                }
                <p>{this.props.title}</p>
            </Link>
        )
    }
    
}

export default Thumb
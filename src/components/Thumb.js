import React from 'react';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {

    render() {
        return(
            <Link to={`/fiche/${this.props.index}`} className='thumb'>
                <figure>
                    <img src={this.props.cover} alt='' />
                    <figcaption>{this.props.title}</figcaption>
                </figure>
            </Link>
        )
    }
    
}

export default Thumb
import React from 'react';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {
    render() {
        return(
            <Link to='/card'>
                <figure className='thumb'>
                    <img src={this.props.picture} alt='' />
                    <figcaption>{this.props.title}</figcaption>
                </figure>
            </Link>
        )
    }
}

export default Thumb
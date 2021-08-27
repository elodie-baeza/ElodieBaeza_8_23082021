import React from 'react';

class Thumb extends React.Component {
    render() {
        return(
            <a href='#top'>
                <figure className='thumb'>
                    <img src={this.props.picture} alt='' />
                    <figcaption>{this.props.title}</figcaption>
                </figure>
            </a>
        )
    }
}

export default Thumb
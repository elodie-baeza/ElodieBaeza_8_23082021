import React from 'react'

class Banner extends React.Component {

    render() {
        return (
            <figure className='banner'>
                <img src={this.props.picture} alt="banner" />
                <figcaption>{this.props.text}</figcaption>
            </figure>
        )
    }

}

export default Banner
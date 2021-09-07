import React from 'react'
import 'components/banner/Banner.scss'

class Banner extends React.Component {

    render() {
        return (
            <figure className='banner'>
                <img src={this.props.picture} alt="banner" />
                <figcaption>{this.props.slogan}</figcaption>
            </figure>
        )
    }

}

export default Banner
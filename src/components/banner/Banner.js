import React from 'react'
import 'styles/components/banner/Banner.css'

class Banner extends React.Component {

    render() {
        return (
            <figure className='banner'>
                <img src={this.props.picture} alt="banner" />
                {this.props.slogan !== undefined
                ? <figcaption>{this.props.slogan}</figcaption>
                : null
                }
            </figure>
        )
    }

}

export default Banner
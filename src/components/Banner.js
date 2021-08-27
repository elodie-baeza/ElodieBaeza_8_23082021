import React from 'react'
import 'styles/index.css'
import banner from 'assets/banner.jpg/'

class Banner extends React.Component {

    render() {
        return (
            <figure className='banner'>
                <img src={banner} alt="banner" />
                <figcaption>Chez vous, partout et ailleurs</figcaption>
            </figure>
        )
    }

}

export default Banner
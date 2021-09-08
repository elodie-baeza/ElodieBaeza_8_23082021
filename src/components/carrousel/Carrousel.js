import 'components/carrousel/Carrousel.css'
import React from 'react'
import arrowBack from 'assets/arrow_back.svg'
import arrowForward from 'assets/arrow_forward.svg'

class Carrousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slidePosition: 1
        }
        this.prevSlide = this.prevSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
    }

    nextSlide() {
        this.setState({
            'slidePosition': this.state.slidePosition === this.props.pictures.length
            ? 1
            : this.state.slidePosition +1
        })
    }

    prevSlide() {
        this.setState({
            'slidePosition': this.state.slidePosition === 1
                ? this.props.pictures.length 
                : this.state.slidePosition -1
        })
    }

    render() {
        return (
            <div className='slider-container'>
                <div className='slider'>
                    {this.props.pictures.map((src, index) => 
                        this.state.slidePosition === ++index && 
                        <img 
                        key={index} 
                        src={src} alt=""
                        className={"active"}
                        />
                    )}
                    <p>{this.state.slidePosition}/{this.props.pictures.length}</p>
                </div>
                {this.props.pictures.length !== 1
                ? <div className='slider-buttons'>
                    <button type='button' onClick={this.prevSlide}>
                        <img src={arrowBack} alt=''/>
                    </button>
                    <button type='button' onClick={this.nextSlide}>
                        <img src={arrowForward} alt=''/>
                    </button>
                </div>
                : null
                }
            </div>
        )
    }
}

export default Carrousel
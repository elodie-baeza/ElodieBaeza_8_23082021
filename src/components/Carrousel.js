import React from 'react'
import 'styles/index.css'
import arrowBack from 'assets/arrow_back.svg'
import arrowForward from 'assets/arrow_forward.svg'
import logements from 'datas/logements.json'

const pictures = logements[1].pictures

class Carrousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            setSlideIndex: 1
        }
        this.prevSlide = this.nextSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
    }

    nextSlide() {
        if(this.state.setSlideIndex !== pictures.length) {
            this.setState(state => {
                return {setSlideIndex: state.setSlideIndex + 1}
            });
        } 
        else if (this.state.setSlideIndex === pictures.length)
        {
            this.setState({setSlideIndex: 1})
        }
    }

    prevSlide() {
        if(this.state.setSlideIndex !== 1) {
            this.setState(state => {
                return {setSlideIndex: state.setSlideIndex - 1}
            });
        }
        if(this.state.setSlideIndex === 1) {
            this.setState({setSlideIndex: pictures.length})
        }
    }

    render() {
        return (
            <div className='slider-container'>
                <div className='slider'>
                    {this.props.pictures.map((src, index) => 
                        <img 
                        key={index + 1} 
                        src={src} alt=""
                        className={this.state.setSlideIndex === index + 1 ? "active" : "slide" }
                        />
                    )}
                    <p>{this.state.setSlideIndex}/{pictures.length}</p>
                </div>
                <div className='slider-buttons'>
                    <button type='button' onClick={this.prevSlide}>
                        <img src={arrowBack} alt=''/>
                    </button>
                    <button type='button' onClick={this.nextSlide}>
                        <img src={arrowForward} alt=''/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Carrousel
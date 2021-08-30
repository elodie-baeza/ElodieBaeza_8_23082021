import React from 'react'
import 'styles/index.css'
import { ReactComponent as ArrowBack } from 'assets/arrow_back.svg'
import logements from 'datas/logements.json'

const equipements = logements[1].equipments

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    toggleClass() {
        const currentState = this.state.active
        this.setState({active: !currentState})
    }

    render() {
        return (
            <div className='dropdown-container'>
                <div className='dropdown-title'>
                    <p>{this.props.title}</p>
                    <ArrowBack 
                    className={`dropdown-icon ${this.state.active ? 'show' : null}`}
                    onClick={this.toggleClass.bind(this)}
                    />
                </div>
                <ul className= {`dropdown-body ${this.state.active ? 'show' : null}`}>
                    {equipements.map((equipement, index) => 
                        <li key={index + 1}>{equipement}</li>
                    )}
                </ul>
            </div>
        )
    }

}

export default Dropdown
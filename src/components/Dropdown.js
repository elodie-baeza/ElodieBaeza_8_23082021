import React from 'react'
import 'styles/index.css'
import { ReactComponent as ArrowBack } from 'assets/arrow_back.svg'

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
            <div className={'dropdown-container ' + this.props.size}>
                <div className='dropdown-title'>
                    <p>{this.props.title}</p>
                    <ArrowBack 
                    className={`dropdown-icon ${this.state.active ? 'show' : null}`}
                    onClick={this.toggleClass.bind(this)}
                    />
                </div>
                <ul className= {`dropdown-body ${this.state.active ? 'show' : null}`}>
                    {this.props.list.map((equipement, index) => 
                        <li key={index + 1}>{equipement}</li>
                    )}
                </ul>
            </div>
        )
    }

}

export default Dropdown
import 'components/dropdown/Dropdown.scss'
import React from 'react'
import { ReactComponent as ArrowBack } from 'assets/arrow_back.svg'

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div className={'dropdown-container ' + this.props.size}>
                <div className='dropdown-title'>
                    <p>{this.props.title}</p>
                    <ArrowBack 
                    className={`dropdown-icon ${this.state.open ? 'show' : null}`}
                    onClick={this.toggleClass}
                    />
                </div>
                <ul className= {`dropdown-body ${this.state.open ? 'show' : null}`}>
                    {this.props.list.map((equipement, index) => 
                        <li key={index + 1}>{equipement}</li>
                    )}
                </ul>
            </div>
        )
    }

}

export default Dropdown
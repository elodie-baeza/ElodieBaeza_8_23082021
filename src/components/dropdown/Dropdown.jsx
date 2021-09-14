import 'styles/components/dropdown/Dropdown.css'
import React from 'react'
import { ReactComponent as ArrowBack } from 'assets/arrow_back.svg'

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    toggleClass() {
        this.setState({'open': !this.state.open})
    }

    render() {
        return (
            <article className={'dropdown'}>
                <header className='dropdown-title'>
                    <p>{this.props.title}</p>
                    <ArrowBack 
                    className={`dropdown-icon ${this.state.open && 'show'}`}
                    // Cette syntaxe nous assure que `this` est bien lié dans la méthode handleClick
                    onClick={() => this.toggleClass()}
                    />
                </header>
                <ul className= {`dropdown-body ${this.state.open && 'show'}`}>
                    {this.props.list.map((equipement, index) => 
                        <li key={index + 1}>{equipement}</li>
                    )}
                </ul>
            </article>
        )
    }

}

export default Dropdown
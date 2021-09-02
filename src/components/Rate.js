import 'styles/index.css';
import React from 'react';
import { ReactComponent as StarIcon } from 'assets/star.svg'

class Rate extends React.Component {

    constructor(props) {
        super(props)
        this.range = [1, 2, 3, 4, 5]
    }

    render() {
        return(
            <div className='rate-container'>
                {this.range.map((rangeElem) =>
                    this.props.value >= rangeElem ? (
                        <StarIcon className='icon-fill'/>
                    ) : 
                        <StarIcon className='icon-empty'/>
                    )}
		    </div>
        )
    }
}

export default Rate;
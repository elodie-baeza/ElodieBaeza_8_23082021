import 'components/rate/Rate.css'
import React from 'react';
import { ReactComponent as StarIcon } from 'assets/star.svg'

class Rate extends React.Component {

    constructor(props) {
        super(props)
        this.range = [1, 2, 3, 4, 5]
    }

    render() {
        return(
            <div className='rate'>
                {this.range.map((rangeElem, index) =>
                    this.props.value >= rangeElem ? (
                        <StarIcon key={index} className='icon-fill'/>
                    ) : 
                        <StarIcon key={index} className='icon-empty'/>
                    )}
		    </div>
        )
    }
}

export default Rate;
import 'styles/components/rate/Rate.css'
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
                    <StarIcon key={index} className={this.props.value >= rangeElem ? 'icon-fill' : 'icon-empty'}/>
                    )}
		    </div>
        )
    }
}

export default Rate;
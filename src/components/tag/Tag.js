import 'components/tag/Tag.scss'
import React from 'react';

class Tag extends React.Component {
    render() {
        return(
            <div className='tag'>{this.props.name}</div>
        )
    }
}

export default Tag
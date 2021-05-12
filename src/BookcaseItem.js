import React, { Component } from 'react';
import ProperTypes from 'prop-types'

class BookcaseItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick = {this.handleClick}>
                {this.props.type}-{this.props.content}
            </li>
         );
    }

    //functions
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

BookcaseItem.ProperTypes = {
    content: ProperTypes.string,
    index: ProperTypes.number,
    deleteItem: ProperTypes.func,
    type: ProperTypes.string.isRequired
}

BookcaseItem.defaultProps = {
    type: '新到'
}

export default BookcaseItem
 
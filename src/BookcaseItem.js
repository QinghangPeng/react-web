import React, { Component } from 'react';
class BookcaseItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick = {this.handleClick}>{this.props.content}</li>
         );
    }

    //functions
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

export default BookcaseItem
 
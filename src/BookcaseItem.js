import React, { Component } from 'react';
import ProperTypes from 'prop-types'

class BookcaseItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    /**
     *  生命周期 props
     *  组件第一次存在于dom中，函数式不会被执行的
     *  如果已经存在于dom中，函数才会被执行
     * 
     *  componentWillReceiveProps() {
     *      console.log('child ---- componentWillReceiveProps')
     *  }
     * 
     *  子组件删除时调用
        componentWillUnmount() {
            console.log('child ---- componentWillUnmount')
        }
     */

    //利用生命周期改善组件性能，当content发生变化时，才发生加载
    shouldComponentUpdate(nextProps,nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render() { 
        console.log('child -- render')
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

//参数校验
BookcaseItem.ProperTypes = {
    content: ProperTypes.string,
    index: ProperTypes.number,
    deleteItem: ProperTypes.func,
    type: ProperTypes.string.isRequired
}

//为参数设置默认值
BookcaseItem.defaultProps = {
    type: '新到'
}

export default BookcaseItem
 
import { Component, Fragment } from "react";
import './style.css'
import BookcaseItem from './BookcaseItem'

class Bookcase extends Component {
    //构造器
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list:['Effictive Java','重构改善既有代码的设计']
        }
    }

    //生命周期
    // componentWillMount() {
    //     console.log('componentWillMount  ---- 组件将要挂载到页面的时刻')
    // }

    // componentDidMount() {
    //     console.log('componentDidMount  ---- 组件挂载完成的时刻')
    // }

    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }

    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate')
    // }

    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate')
    // }

    render() {
        console.log('3-render  ---- 组件挂载中')
        return (
            //flex
            <Fragment>
                {/* 这是一个div的注释 */}
                <div>
                    <label htmlFor = "jp">增加书籍：</label>
                    <input id = "jp" className = "input" value = {this.state.inputValue} onChange = {this.inputChange.bind(this)}/>
                    <button onClick = {this.addListItem.bind(this)}>增加书籍</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                /*
                                <li key = {item + index}
                                    onClick = {this.deleteItem.bind(this,index)}
                                    dangerouslySetInnerHTML = {{__html:item}}
                                >
                                </li>
                                */
                                <div>
                                    <BookcaseItem />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    //functions
    inputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    addListItem() {
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }

    deleteItem(index) {
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }

}

export default Bookcase
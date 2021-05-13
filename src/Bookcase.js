import { Component, Fragment } from "react";
import './style.css'
import BookcaseItem from './BookcaseItem'

class Bookcase extends Component {
    //构造器
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.addListItem = this.addListItem.bind(this)
        this.state = {
            inputValue: '',
            list:['Effictive Java','重构改善既有代码的设计']
        }
    }

    /*生命周期
    componentWillMount() {
        console.log('componentWillMount  ---- 组件将要挂载到页面的时刻')
    }

    componentDidMount() {
        console.log('componentDidMount  ---- 组件挂载完成的时刻')
    }

    shouldComponentUpdate() {
        console.log('1-shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        console.log('2-componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('4-componentDidUpdate')
    }*/

    render() {
        // console.log('3-render  ---- 组件挂载中')
        return (
            //flex
            <Fragment>
                {/* 这是一个div的注释 */}
                <div>
                    <label htmlFor = "jp">增加书籍：</label>
                    <input 
                        id = "jp" 
                        className = "input" 
                        value = {this.state.inputValue} 
                        onChange = {this.inputChange}
                        ref = {(input) => {this.input = input}}
                    />
                    <button onClick = {this.addListItem}>增加书籍</button>
                </div>
                <ul ref = {(ul) => {this.ul = ul}}>
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
                               /* react
                                    单项数据流：
                                        组件中数据只能单项传递，接收数据的组件只有只读权限，不能修改数据
                                    react可以和其它框架相结合，比如index.html中新增字体有颜色的div（jQuery语法）
                                    函数式编程
                                        代码结构清晰，便于编写测试
                                 */
                                <BookcaseItem 
                                    key = {item + index} 
                                    content = {item}
                                    index = {index}
                                    deleteItem = {this.deleteItem}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    //functions
    /*inputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }*/
    //利用ref来绑定值
    inputChange() {
        this.setState({
            inputValue:this.input.value
        })
    }

    addListItem() {
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        },() => {
            //回调函数，setState是异步的，如果类似这种需要计数，需要在回调里写
            console.log(this.ul.querySelectorAll('li').length)
        })
    }

    deleteItem(index) {
        // console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }

}

export default Bookcase
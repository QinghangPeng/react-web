import { Component, Fragment } from "react";

class Bookcase extends Component {
    //构造器
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list:[]
        }
    }

    render() {
        return (
            //flex
            <Fragment>
                <div>
                    <input value = {this.state.inputValue} onChange = {this.inputChange.bind(this)}/>
                    <button onClick = {this.addListItem.bind(this)}>增加书籍</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return <li key = {item + index}>{item}</li>
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

}

export default Bookcase
import React, { Component } from 'react';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
         this.toToggole = this.toToggole.bind(this)
    }

    render() { 
        return ( 
            <div>
                <div className = {this.state.isShow? 'show':'hide'}>最新活动 - 五折</div>
                <div><button onClick = {this.toToggole}>参加活动</button></div>
            </div>
         );
    }

    //functions
    toToggole() {
        this.setState({
            isShow: this.state.isShow? false : true
        })
    }
}
 
export default Boss;
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

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
                <CSSTransition 
                    in = {this.state.isShow}
                    timeout = {2000}
                    classNames = 'boss-text'
                    unmountOnExit
                >
                    <div>最新活动 - 五折</div>
                </CSSTransition>
                {/* <div className = {this.state.isShow? 'show':'hide'}>最新活动 - 五折</div> */}
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
import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 10
        }
    }
    decr=()=>{
        this.setState({count:5})
    }
    componentDidUpdate(){
        console.log("update", this.state.count);
        //console.log("re-render");
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div><button onClick={this.decr}>Click here</button></div>
            </div>
        )
    }
}

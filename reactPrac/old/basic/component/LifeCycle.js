import React, { Component,memo } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Guest',
             show:true
        }
        console.log("constructor")
    }
   componentDidMount(){
       console.log("mount");
   }
   componentDidUpdate(){
       console.log("update");
       console.log("re-render");
   }
   updateName=()=>{
this.setState({name:"Candy"})
   }
toggleName=()=>{
    this.setState({show:!this.state.show})
   }
   componentWillUnmount(){
    console.log("unmount")
}
/* shouldComponentUpdate(){
    console.log("noupdate")
    return true;
} */
    render() {
        console.log('render')
        
        return (
            <div>
                {this.state.show && <h1>{this.state.name}</h1>}
                <button onClick={this.updateName}>Click to change name</button> <button onClick={this.toggleName}>Toggle Name</button>
            </div>
        )
    }
}
export default memo(LifeCycle)

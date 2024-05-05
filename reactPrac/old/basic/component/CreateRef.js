import React, { Component, createRef } from 'react'

export default class CreateRef extends Component {
    constructor(props) {
        super(props)
      this.inputRef=createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickRef=(e)=>{
     console.log(this.inputRef.current.value)   
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickRef}>Click Here</button>
            </div>
        )
    }
}

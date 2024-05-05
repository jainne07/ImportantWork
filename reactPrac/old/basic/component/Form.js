import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             password:'',
             nameErr:false,
             passWrdErr:false
        }
    }
    nameValue=(e)=>{
        if(e.target.value === ""){
            this.setState({
                nameErr:true,
                name:e.target.value
            })
        }
        else{
            this.setState({
                nameErr:false,
                name:e.target.value
            })
        }
    }
    pswrdValue=(e)=>{
        if(e.target.value === "" || e.target.value.length <= 4){
            this.setState({
                passWrdErr:true,
                password:e.target.value
            })
        }
        else{
            this.setState({
                passWrdErr:false,
                password:e.target.value
            })
            
        }
    }
    /* updateValue=(e)=>
    {
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    } */
    formSubmit=()=>{
        if(this.state.name ==="" && (this.state.password ==="" || this.state.password.length <= 4)){
            this.setState({
                nameErr:true,
                passWrdErr:true
            })     
        }
        else if(this.state.name ===""){
            this.setState({
                nameErr:true
            })
           }
           else if(this.state.password ==="" || this.state.password.length <= 4){
            this.setState({
                passWrdErr:true
            })   
            }
        else{
            alert(this.state.name +' which password is '+ this.state.password)
            this.setState({
                passWrdErr:false,
                nameErr:false
            })
        }
    }
    render() {
        return (
            <div >
                <div className="pdBoth"><input type="text" name="name" onChange={this.nameValue} placeholder="Enter Name"/></div>
                { this.state.nameErr && <div style={{color:"red",fontSize:"11px",padding:"0px 0px 5px"}}>please enter name</div>}
                <div className="pdBoth"><input type="password" name="password" onChange={this.pswrdValue}  placeholder="Enter password"/></div>
            { this.state.passWrdErr && <div style={{color:"red",fontSize:"11px",padding:"0px 0px 5px"}}>please passoword with minlength 5</div>
            }
                <button onClick={this.formSubmit}>Submit Form</button>
            </div>
        )
    }
}

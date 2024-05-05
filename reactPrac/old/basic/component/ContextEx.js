/* import React, { useContext } from 'react'
import { SamText } from '../App'
export default function ContextEx() {
    const {childColor,valueFetch}=useContext(SamText);
    return (
        <div>
            <h2 style={{color:childColor}}>Child Component</h2>
            <p>{valueFetch}</p>
        </div>
    )
} */
import React, { Component } from 'react'
import { SamText } from '../App'
export default class ContextEx extends Component {
    render() {
        return (
            <div>
                <SamText.Consumer>
                    {(valueFetch)=>{
                       <p>{valueFetch}</p> 
                    }}
                </SamText.Consumer>
            </div>
        )
    }
}


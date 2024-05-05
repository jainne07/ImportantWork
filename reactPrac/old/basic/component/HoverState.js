import React from 'react'
import WithCount from './WithCount'

function HoverState(props) {
    return (
        <div>
            <p>Hoc MouseHover Example</p>
            <button onMouseOver={props.click}>{props.dataCount} - Click here</button>
            <br /><br />
        </div>
    )
}
export default WithCount(HoverState)
import React from 'react'
import WithCount from './WithCount'

function ClickExample(props) {
    return (
        <div>
            <p>Hoc Click Example</p>
            <button onClick={props.click}>{props.dataCount} - Click here</button>
        </div>
    )
}
export default WithCount(ClickExample)
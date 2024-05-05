import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/purecomp">Pure Component</Link></li>
                    <li><Link to="/lifecycle">lifecycle</Link></li>
                    <li><Link to="/clickable">HOC Clickable Component</Link></li>
                    <li><Link to="/hoverable">HOC Hoverable Component</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/refex">Create Ref ex</Link></li>
                    <li><Link to="/useref">Use Ref ex</Link></li>
                    <li><Link to="/usereducer">Use Reducer</Link></li>
                    <li><Link to="/useContext">Use Context</Link></li>
                </ul>
            </nav>
        </div>
    )
}

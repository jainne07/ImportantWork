import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
           
               <nav className="navbar navbar-expand-sm navbar-light bg-light">
                   <Link className="navbar-brand" to="/">Navbar</Link>
                   <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                       aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="collapsibleNavId">
                       <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                           <li className="nav-item active">
                            <Link to="/" >Home</Link>
                           </li>
                           <li className="nav-item">
                           <Link to="/about" >About</Link>
                           </li>
                           <li className="nav-item">
                           <Link to="/contact" >Contact</Link>
                           </li>
                       </ul>
               
                   </div>
               </nav>
        </div>
    )
}

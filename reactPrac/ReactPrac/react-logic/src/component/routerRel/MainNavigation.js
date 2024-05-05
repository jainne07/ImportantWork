import {NavLink} from 'react-router-dom'
export default function MainNavigation(){
return(
    <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to="/" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Home page</NavLink></li>
        <li className="nav-item"><NavLink to="/Product"  className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Product</NavLink></li>
    </ul>
)
}
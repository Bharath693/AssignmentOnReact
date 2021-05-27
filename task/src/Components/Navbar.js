import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 const Navbar = () => {
    return (
        <div className="maincontainer">
            <ul className="container">
               <Link to="/"><li>MobileItems</li></Link>
                <Link to="/admin"><li>AdminPage</li></Link>
            </ul>
        </div>
    )
}
export default Navbar
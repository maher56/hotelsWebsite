import React , { useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/logo.svg"
const Navbar = () => {
    const [open , setOpen] = useState(true);
    return (
        <nav className='navbar'>
            <div className='nav-center'>
            <div className='nav-header'>
                <Link to="/">
                    <img src={logo} alt='logo'/>
                </Link>
                <button onClick={()=>setOpen(p=>!p)} type='button' className='nav-btn'><FaAlignRight className='nav-icon' /></button>
            </div>
            <ul className={open ? "nav-links show-nav": "nav-links"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/rooms">Rooms</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar

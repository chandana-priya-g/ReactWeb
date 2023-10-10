import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../icons_assets/logo.png';
import Hamburger from 'hamburger-react'
import "../Styles/Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);
    const [isHam,setHam] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header>
            <nav className='navbar'>
                <div className="navbar-container">

                    <Hamburger toggled={isHam} toggle={setHam} />
                    
                    <Link to="/" className="navbar-logo">
                        <img src = {logo} alt = "Logo" />
                    </Link>

                    <ul className = "nav-menu">
                        <li className='nav-item'> <Link className='nav-links' to="/">Home</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/about">About</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/menu">Menu</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/new">Order Online</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/booking">Book Table</Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/confirmation"></Link> </li>
                        <li className='nav-item'> <Link className='nav-links' to="/login">Login</Link> </li>
                    </ul>
                </div>
            </nav>
        </header>
  )
}

export default Navbar;
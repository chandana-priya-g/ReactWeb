import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../icons_assets/footer-logo.png';
import "../Styles/FooterComponent.css"


function FooterComponent() {

    const [click, setClick] = useState(false);
    const [isHam,setHam] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <footer className='footer-container'>
        <menu className='footer-menu'>
            
                <img className="footerimg"
                    src={logo}
                    alt="Little Lemon logo"
                ></img>
            
            <li className="footerNavigation">
                <h1 className="footer-header">Navigation</h1>
                <ul className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    >
                    Menu
                    </a>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </li>

            <li className='footerContact'>
                <h1 className="footer-header">Contact</h1>
                <ul className="footer-links">
                    <li>Central Park,</li>
                    <li>New York</li>
                    <br></br>
                    <li>(020)-123-4353</li>
                    <br></br>
                    <a
                    href="mailto: customercare@littlelemon.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                    info@littlelemon.com
                    </a>
                </ul>
            </li>
            <li className='footerConnect'>
                <h1 className="footer-header">Connect</h1>
                <ul className="footer-links">
                    <a
                    href="https://www.facebook.com/thelittlelemonshop/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Facebook
                    </a>
                    <a
                    href="https://www.instagram.com/littlelemonmoon/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Instagram
                    </a>
                    <a
                    href="https://www.youtube.com/watch?v=3Li-FfypZYE"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Join us!
                    </a>
                </ul>
            </li>
        </menu>
    </footer>
  )
}

export default FooterComponent;
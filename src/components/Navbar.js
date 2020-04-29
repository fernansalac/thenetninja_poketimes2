import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    setTimeout(() => {
        props.history.push('/Contact');
    }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <ul className="left">
                    <a className="brand-logo">Poke'Times</a>
                </ul>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default withRouter(Navbar);
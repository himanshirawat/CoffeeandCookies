import React from 'react';
import './Header.css';
import logo from "../image/logo.jpg";

const Header = () => {
    return(
        <div> 
            <header >
               <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <img src={logo} alt="logo" className='photo'/> 
                    <a className='navbar-brand' href='/'><h1>Coffee & Cookies</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="navbar-nav justify-content-end">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="/aboutus.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"> Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contactus.html"> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
               </nav>
            </header>
        </div>
    );
};

export default Header;
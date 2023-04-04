import React from "react";
import "./Footer.css";
import coffee from '../image/logo.jpg';

const Footer = () => {
    return (
        <footer className="container-fluid w-100" id="footer">
            <div className="leftfooter">
                <img src={coffee} alt="logo" />  
            </div>  
            <div className="midfooter">
                <h1>Coffee & Cookies</h1>
                <p>Delicious,Sweet,Flavour</p>
                <p>Copyrights 2023 &copy; Coffee & Cookies</p>
            </div> 
            <div className="rightfooter ">
                 <h4>Follow us</h4>
                 <a href="https://www.linkedin.com/in/himanshi-rawat"><i className="icons fs-6 fa-brands fa-linkedin"></i> Himanshi Rawat</a>
                 <a href="https://github.com/himanshirawat"><i className=" icons fs-6 fa-brands fa-github"></i> himanshirawat</a>
                 <a href="https://www.instagram.com/himanshirawat18/"><i className="fa-brands fs-6 fa-instagram icons"></i> himanshirawat18</a>
            </div>      
        </footer>
    );
};

export default Footer;